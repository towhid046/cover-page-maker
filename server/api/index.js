// dependencies
import express from "express";
import connectDB from "../src/config/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";
import counterRoute from "../src/route/counter.route.js";

dotenv.config();

const app = express();

app.use(cors({
    origin: ['https://cover-page-maker.web.app', 'http://localhost:5173']
}));

app.use(express.json());

// connect DB
connectDB();

// Routers
app.use("/api/v1", counterRoute);

// listen the PORT
app.listen(process.env.PORT, () => console.log("Server ready on port 5000."));

export default app;
