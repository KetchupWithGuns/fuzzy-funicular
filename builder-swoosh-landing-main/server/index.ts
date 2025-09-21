import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSubmitLocation } from "./routes/submitLocation";
import { handleJoinUs } from "./routes/joinUs";
import { initDb } from "./db";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Initialize DB and ensure tables (don't crash dev server on transient DB errors)
  initDb().catch((err) => {
    console.error('Error initializing database (continuing without DB):', err?.message || err);
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/submit-location", handleSubmitLocation);
  app.post("/api/join-us", handleJoinUs);

  return app;
}
