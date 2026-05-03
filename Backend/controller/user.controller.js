const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                msg: "User Not Found In Database"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                msg: "Invalid Credentials"
            })
        }

        const token = jwt.sign(
            {userId: user._id, role: user.role},
            process.env.JWT_SECRET, 
            {expiresIn: "3d"}
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({msg: `Server error: ${error}`});
    }
}

module.exports = {login}