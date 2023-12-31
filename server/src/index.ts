import routes from "./routes";
import bodyParser from "body-parser";
import express from "express";
import db from "./utils/db";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

const port = process.env.PORT;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  db();
  routes(app);
});
