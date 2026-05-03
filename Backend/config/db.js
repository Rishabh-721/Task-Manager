const mongoose = require('mongoose');

const connectDB = async (req, res) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`database connected with ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;