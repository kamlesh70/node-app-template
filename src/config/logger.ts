import winston from "winston";
import { APP_CONFIG } from "./appConfig";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  level: "info",
  defaultMeta: {
    serviceName: "Auth Service",
  },
  format: winston.format.combine(
    winston.format.timestamp({
      format: () =>
        new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    }),
    winston.format.json(),
    winston.format.prettyPrint(),
  ),
  transports: [
    new DailyRotateFile({
      filename: "./logs/info.log",
      maxSize: "20m",
      maxFiles: "1d",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      level: "info",
      silent: APP_CONFIG.NODE_ENV === "test",
    }),
    // new winston.transports.File({
    //     dirname: "logs",
    //     filename: "info.log",
    //     level: "info",
    //     silent: APP_CONFIG.NODE_ENV === 'test',
    // }),
    new DailyRotateFile({
      filename: "./logs/error.log",
      maxSize: "20m",
      maxFiles: "1d",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      level: "error",
      silent: APP_CONFIG.NODE_ENV === "test",
    }),
    // new winston.transports.File({
    //     dirname: "logs",
    //     filename: "error.log",
    //     level: "error",
    //     silent: APP_CONFIG.NODE_ENV === 'test'
    // }),
    new winston.transports.Console({
      level: "info",
      silent: APP_CONFIG.NODE_ENV === "test",
    }),
  ],
});

export default logger;
