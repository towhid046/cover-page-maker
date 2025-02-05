import mongoose from 'mongoose';

const counterSchema = new mongoose.Schema({
    count: Number,
    isAuthUser: Boolean,
});

export default counterSchema;