const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    isCompleted :{
        type: Boolean,
        default: false
    }
},{ _id: false})

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    assignedTo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    teamId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
        required: true,
    },
    status:{
        type: String,
        enum: ["pending", "in_progress", "submitted", "completed"],
        default: "pending"
    },
    subtasks: {
        type: [subTaskSchema],
        default: [],
    },
    dueDate:{
        type: Date,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model("Task", taskSchema);