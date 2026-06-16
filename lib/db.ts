import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "Root@1234",
  database: process.env.DB_NAME || "amazon_clone",
});