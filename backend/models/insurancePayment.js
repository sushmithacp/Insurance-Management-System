const express = require('express')

const mongoose = require("mongoose");
const router = express.Router();

const InsurancePaymentSchema = new mongoose.Schema({
  policyNumber: {
    type: String,
    required: true
  },
  paymentDate: {
    type: Date,
    required: true
  },
  paymentAmount: {
    type: Number,
    required: true
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentStatus: {
    type: String,
  },
  referenceNumber: {
    type: String
  }
}, {
  timestamps: true  
});


const InsurancePaymentModel = mongoose.model('InsurancePayment', InsurancePaymentSchema);

module.exports = InsurancePaymentModel;