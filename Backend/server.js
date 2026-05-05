const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require("./routes/user.routes");
const inviteRoutes = require("./routes/invite.routes");

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

app.use("/users", userRoutes);
app.use("/users/invite", inviteRoutes);

app.listen(port , () => {
    console.log(`Server is running on ${port}`)
})