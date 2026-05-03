const bcrypt = require("bcrypt");

const hashedPassword = async(password) => {
    return await bcrypt.hash(password, 12);
}

module.exports = hashedPassword;