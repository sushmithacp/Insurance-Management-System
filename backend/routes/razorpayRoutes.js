
const express = require("express");
const router = express.Router();
const razorpay = require("razorpay");
const {razorpayController,getKey,verifyPayment } = require('../controllers/razorpay');

router.post("/create-order", razorpayController);
router.get("/getKey", getKey);
router.post("/verify-payment", verifyPayment);

module.exports = router;
