const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        trim: true,
    },
    tlId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    }
},{timestamps: true})

module.exports = mongoose.model("Team", teamSchema); 