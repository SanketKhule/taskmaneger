const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    mobile: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee"
    },
    profileImage: {
        type: String,
        default: ""
    },

}, { timestamps: true })) 