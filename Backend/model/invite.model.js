const mongoose = require("mongoose");


const inviteSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    role:{
        type: String,
        enum: ["superadmin", "admin", "tl", "employee"],
        default: "employee"
    },
    invitedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        default: null,
    },
    token: {
        type: String,
        required: true,
        unique: true,
    },
    exipresAt: {
        type: Date,
        required: true,
    },
    isUsed:{
        type: Boolean,
        default: false,
    }
}, {timestamps: true}
);

module.exports = mongoose.model("Invite", inviteSchema);