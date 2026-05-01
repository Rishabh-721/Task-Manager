const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    tlid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tl',
        default: null,
    }
})

module.exports = mongoose.model("Team", teamSchema); 