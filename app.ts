import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./connections/mongoDb";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.options("*", cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

ConnectDB();
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
