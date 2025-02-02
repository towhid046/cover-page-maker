const mongoose = require('mongoose')

const counterSchema = new mongoose.Schema({
    count: Number,
    isAuthUser: Boolean,
});

module.exports = counterSchema;