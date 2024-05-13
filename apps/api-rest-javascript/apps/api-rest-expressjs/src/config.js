import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const DB_HOST = process.env.DATABASE_HOST || "localhost";
export const DB_USER = process.env.DATABASE_USER || "root";
export const DB_PASSWORD = process.env.DATABASE_PASSWORD || "admin";
export const DB_DATABASE = process.env.DATABASE_NAME || "companydb";
export const DB_PORT = process.env.DATABASE_PORT || 3306;