const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["superadmin", "admin", "tl", "employee"],
        default: "employee"
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: null,
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    employmentStatus : {
        type: String,
        enum: ["active", "resigned", "terminated", "absconded"],
        default: "active"
    }
}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);