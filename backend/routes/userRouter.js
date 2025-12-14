const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router()

router.post("/register", async (req, res)=>{
    const {name, email, password} = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = new User({
        name,
        email,
        password: hashPassword
    });

    await user.save();
    res.status(201).json({message:"User Registered Successfully"});
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user){
        return res.status(400).json({message: "Wrong Password"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        return res.status(400).json({message: "Wrong Password"});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

    res.json({message: "Login Success", token});

})

module.exports = router;