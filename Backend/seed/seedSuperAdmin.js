const mongoose = require("mongoose");
const hashPassword  = require("../utils/utils.hashPassword");
const User = require("../model/user.model");
const dotenv = require("dotenv");
dotenv.config();

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);

        const existing = await User.findOne({role: "superadmin"})
        
        if(existing){
            console.log(`Superadmin already exist: ${existing.email}`);
            process.exit(0);
        }

        const hashed = await hashPassword(process.env.PASSWORD);

        const Superadmin = {
            name : process.env.NAME,
            email : process.env.EMAIL,
            password : hashed,
            role: "superadmin"
        }

        await User.create(Superadmin);
        console.log(`Superadmin Created Sucessfully ${Superadmin.name}`);
        process.exit(0);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

seed();