const express = require('express');
const razorpayInstance = require('../controllers/razorpayInstance');
const UserPolicy = require('../models/userPolicy');
const crypto = require('crypto');
const mongoose = require('mongoose');

let razorpayController = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), 
    currency: "INR",
    receipt: "order_rcptid_11"
  };

  try {
    const order = await razorpayInstance.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
}
let getKey = async(req,res)=>{
  res.status(200).json({
    key:process.env.RAZORPAY_API_KEY
  })
}

const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, policyId, amount, policid, policnum, policov } = req.body;

  const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECRET);
  hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
  const generated_signature = hmac.digest("hex");

  if (generated_signature === razorpay_signature) {
    try {
      await UserPolicy.create({
        // userId: mongoose.Types.ObjectId(userId),
        // policyId: mongoose.Types.ObjectId(policyId),
        userId,
        policyId,
        razorpay_order_id,
        razorpay_payment_id,
        amount,
        policid,
        policnum,
        policov,
        purchaseDate: new Date()
      });

      res.send("Payment verified and policy saved.");
    } catch (err) {
      console.error(err);
      res.status(500).send("Error saving policy.");
    }
  } else {
    res.status(400).send("Invalid payment signature.");
  }
};

module.exports = {razorpayController, getKey, verifyPayment} ;
