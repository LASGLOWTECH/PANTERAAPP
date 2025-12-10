// lib/auth.js
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

/**
 * requireToken(req) -> returns payload or throws
 * Use inside server routes to protect admin APIs.
 */
export function requireToken(req) {
  const auth = req.headers.get?.("authorization") || req.headers?.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.split(" ")[1] : auth;
  if (!token) throw new Error("No token");
  return verifyToken(token);
}
