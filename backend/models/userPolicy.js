const mongoose = require('mongoose');
const { Schema } = mongoose;
const Policy = require('../models/userPolicy'); 
const User = require('../models/user'); 


const UserPolicySchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // type: String,
    ref: 'User',
    required: true,
  },
  policyId: {
    type: mongoose.Schema.Types.ObjectId,
    // type: String,
    ref: 'UserPolicy',
    required: true,
  },
  razorpay_order_id: {
    type: String,
    required: true,
  },
  razorpay_payment_id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  policid: {
    type: String,
    required: true,
  },
  policnum: {
    type: String,
    required: true,
  },
  policov: {
    type: Number,
    required: true,
  },
  purchaseDate: {
    type: Date,
    default: Date.now,
  }
});

const UserPolicy = mongoose.model('UserPolicy', UserPolicySchema);
module.exports = UserPolicy;
