import express from "express";
import cors  from "cors";
import countDownload from "./routes/counter.routes";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", countDownload);

export default app;
