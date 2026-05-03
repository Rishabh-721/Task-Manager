const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRouter = require("./routes/user.routes")

dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res)=> {
    res.status(200).json({
        message: "Api will work"
    })
})

app.use("/users", userRouter);

app.listen(port , () => {
    console.log(`Server is running on ${port}`)
})