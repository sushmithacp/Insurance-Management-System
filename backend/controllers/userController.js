const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');
const UserPolicy = require('../models/userPolicy');

let register =  async (req, res) => {
    let { username, password } = req.body;
    
    password = await bcrypt.hash(password, 10);
    let user = new User({username, password}) 
    await user.save()
   
    
};

let login =  async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({username: username});
    
    let isValid = await bcrypt.compare(password, user.password)
    if (!isValid) {
        res.status(401).send('Invalid credentials');
    } else {
        const token = jwt.sign({  userId: user._id, username, role: user.role }, 
            process.env.SECRET_KEY,);
        res.send({ token });
    }
};

let profile = async (req,res) => {

  try {
    const userPolicies = await UserPolicy.find({ userId: req.user.userId }).populate('policyId');

    console.log("User policies found:", userPolicies);
    res.json({
      message: "profile data",
      user: req.user,
      policies: userPolicies
    });
  } catch (error) {
    console.error("Error fetching user policies:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

let admin = async(req, res) => {
    res.send('Welcome Admin');
};

module.exports = {  
    register,
    login,
    profile,
    admin
}
