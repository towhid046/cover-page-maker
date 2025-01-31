import { Request, Response } from "express";
import Counter from "../models/counter.model";

const countDownloadHandler = async (req: Request, res: Response):Promise<any> => {
  try {
    const { count:ct, isAuthUser } = req.body;
    const newCount = ct ? JSON.parse(ct) : false
    if (!newCount) {
       return res.status(403).send({ message: "Count must be a number" });
    }

    if (typeof isAuthUser !== 'boolean') {
       return res.status(403).send({ message: "isAuthUser must be a boolean" });
    }

    // Find the existing Counter document
    const existingCounter = await Counter.findOne({ isAuthUser });

    if (existingCounter) {
      // Update the existing counter by incrementing the count by 1
      existingCounter.count += 1;
      await existingCounter.save();

      return res.status(200).json({ message: "Counter updated successfully", counter: existingCounter });
    } else {
      // Create new Counter document if none exists
      const newCounter = new Counter({ count: 1, isAuthUser });

      // Save to MongoDB
      await newCounter.save();

      return res.status(201).json({ message: "Counter saved successfully", counter: newCounter });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

export default countDownloadHandler;
