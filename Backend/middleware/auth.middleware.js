const jwt = require("jsonwebtoken");
const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization;

        if(!token){
            return res.status(401).json({ msg: "No Token, Access Not Found"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({msg: "Invalid or Expired Token"});
    }
}

module.exports = auth;