const invite = require("../model/invite.model");
const crypto = require("crypto");
const rolePermissions = {
    superadmin: ["admin","tl","employee"],
    admin: ["tl","employee"],
    tl: ["employee"]
}

const createInvite = async(req, res) => {
    try {
        const {email, role} =  req.body;
        const user = req.user;

        const allowedRoles = rolePermissions[user.role];

        if(!allowedRoles || !allowedRoles.includes(role)){
            return res.status(403).json({
                "message": "You are not allowed to create this role",
            })
        }

        const token = crypto.randomBytes(32).toString("hex");

        const exipresAt = new Date(Date.now() + 7200000); //2 hours expiry

        const Invite = await invite.create({
            email,
            role,
            invitedBy: user.userId,
            token,
            expiresAt,
        })

        res.status(201).json({
            "message": "Invite Created",
            inviteLink: `http://localhost:3000/signup?token=${token}`,
            invite,
        })
    } catch (error) {
        res.status(500).json({
            message: `Server Error ${error}`
        })
    }
}

module.exports = {createInvite};