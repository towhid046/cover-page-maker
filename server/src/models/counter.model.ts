import mongoose, { Schema, Document } from "mongoose";

export interface ICounter extends Document {
  count: number;
  isAuthUser: boolean;
}

const CounterSchema: Schema = new Schema({
  count: { type: Number, required: true },
  isAuthUser: { type: Boolean, required: true }
});

export default mongoose.model<ICounter>("Counter", CounterSchema);
