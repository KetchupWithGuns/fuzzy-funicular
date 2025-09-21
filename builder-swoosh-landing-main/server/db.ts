import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

let pool: Pool | null = null;

async function tryConnect(opts: any) {
  const p = new Pool(opts);
  try {
    await p.query('SELECT 1');
    return p;
  } catch (err) {
    // ensure client closed
    try {
      await p.end();
    } catch (e) {}
    throw err;
  }
}

export async function initDb() {
  // Try SSL connection first (common for managed providers)
  try {
    pool = await tryConnect({ connectionString, ssl: { rejectUnauthorized: false } });
    console.log('Connected to database with SSL');
  } catch (err) {
    console.warn('SSL database connection failed, trying without SSL:', err?.message || err);
    try {
      pool = await tryConnect({ connectionString });
      console.log('Connected to database without SSL');
    } catch (err2) {
      console.error('Failed to connect to database with and without SSL:', err2);
      throw err2;
    }
  }

  // Create tables if they don't exist
  await pool.query(`
    CREATE TABLE IF NOT EXISTS submit_locations (
      id SERIAL PRIMARY KEY,
      full_name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      state TEXT,
      city TEXT,
      pincode TEXT,
      complete_address TEXT,
      location_name TEXT,
      additional_info TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS join_us (
      id SERIAL PRIMARY KEY,
      role TEXT,
      full_name TEXT,
      email TEXT,
      phone TEXT,
      city TEXT,
      experience TEXT,
      message TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    );
  `);
}

export function getPool() {
  if (!pool) throw new Error('Database not initialized — call initDb first');
  return pool;
}
