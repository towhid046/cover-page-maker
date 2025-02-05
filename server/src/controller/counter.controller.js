// dependencies
import counterSchema from '../model/counter.model.js'
import mongoose from 'mongoose'

const Counter = mongoose.model("Counter", counterSchema)

export const getCounterHandler = async (req, res) => {
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
}

export const updateCounterHandler = async (req, res) => {
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
}