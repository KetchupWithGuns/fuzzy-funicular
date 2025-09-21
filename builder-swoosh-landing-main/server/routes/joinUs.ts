import { RequestHandler } from 'express';
import { getPool } from '../db';

export const handleJoinUs: RequestHandler = async (req, res) => {
  const pool = getPool();
  try {
    const payload = req.body;
    const required = ['role', 'fullName', 'email', 'phone'];
    for (const key of required) {
      if (!payload[key]) {
        return res.status(400).json({ message: `Missing required field: ${key}` });
      }
    }

    const result = await pool.query(
      `INSERT INTO join_us (role, full_name, email, phone, city, experience, message) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING id`,
      [
        payload.role,
        payload.fullName,
        payload.email,
        payload.phone,
        payload.city || null,
        payload.experience || null,
        payload.message || null,
      ]
    );

    return res.status(200).json({ message: 'Application received', id: result.rows[0].id });
  } catch (err) {
    console.error('Error saving join us application', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
