import express from "express";
import mongoose from "mongoose";
import connectDB from "../lib/connectDB.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors({
    origin: ['https://cover-page-maker.web.app', 'http://localhost:5173']
}));
app.use(express.json());

const counterSchema = new mongoose.Schema({
    count: Number, // Changed from String to Number for arithmetic operations
    isAuthUser: Boolean,
});

const Counter = mongoose.model("Counter", counterSchema);
connectDB();

app.put("/api/v1/counter", async (req, res) => {
    try {
        const { count, isAuthUser } = req.body;

        if (count === undefined || isAuthUser === undefined) {
            return res.status(400).send({ message: "Invalid request data!" });
        }

        // Check if the document exists
        let counter = await Counter.findOne({ isAuthUser });

        if (counter) {
            // Update the count
            counter.count += 1; // Fix: Ensure count is treated as a number
            await counter.save();
            return res.status(200).send({ message: "Count updated!" });
        } else {
            // Create a new document
            counter = new Counter({ count, isAuthUser });
            await counter.save();
            return res.status(201).send({ message: "New counter created!" });
        }
    } catch (error) {
        console.error("Error updating counter:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});

app.get("/api/v1/counter", async (req, res) => {
    try {
        const { pass } = req.query;

        if (pass !== "12115") {
            return res.status(400).send({ message: "Invalid request data!" });
        }

        // Find the counter document where count is greater than 0
        const counter = await Counter.findOne({ count: { $gt: 0 } });

        if (!counter) {
            return res.status(404).send({ message: "Counter not found!" });
        }

        res.status(200).send({ counter });
    } catch (error) {
        console.error("Error fetching counter:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});


// Fix incorrect port number
app.listen(process.env.PORT, () => console.log("Server ready on port 5000."));

export default app;
