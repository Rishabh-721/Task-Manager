const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/config');

dotenv.config();

const port = process.env.PORT;

const app = express();

connectDB();

app.get("/", (req, res)=> {
    res.status(200).json({
        message: "Api will work"
    })
})


app.listen(port , () => {
    console.log(`Server is running on ${port}`)
})




