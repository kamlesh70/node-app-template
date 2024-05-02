import { config } from "dotenv";
import path from "path";

config({
  path: path.join(__dirname, `../../.env.${process.env.NODE_ENV || "dev"}`),
});

export const APP_CONFIG = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
};
