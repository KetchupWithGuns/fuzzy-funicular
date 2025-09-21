import { RequestHandler } from 'express';
import { getPool } from '../db';

export const handleSubmitLocation: RequestHandler = async (req, res) => {
  const pool = getPool();
  try {
    const payload = req.body;

    // Basic server-side validation
    const required = ['fullName', 'email', 'phone', 'state', 'city', 'pincode', 'completeAddress', 'locationName', 'captchaAnswer'];
    for (const key of required) {
      if (!payload[key]) {
        return res.status(400).json({ message: `Missing required field: ${key}` });
      }
    }

    // Simple captcha validation
    if (String(payload.captchaAnswer).trim() !== '6') {
      return res.status(400).json({ message: 'Captcha incorrect' });
    }

    const result = await pool.query(
      `INSERT INTO submit_locations (full_name, email, phone, state, city, pincode, complete_address, location_name, additional_info) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`,
      [
        payload.fullName,
        payload.email,
        payload.phone,
        payload.state,
        payload.city,
        payload.pincode,
        payload.completeAddress,
        payload.locationName,
        payload.additionalInfo || null,
      ]
    );

    const id = result.rows[0].id;
    return res.status(200).json({ message: 'Submission saved', id });
  } catch (err) {
    console.error('Error saving submission', err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
