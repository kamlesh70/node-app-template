import express, { Request, Response } from "express";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app = express();

app.get("/", async (_: Request, res: Response) => {
  return res.status(200).send("Welcome to Auth service");
});

app.use(globalErrorHandler);

export default app;
