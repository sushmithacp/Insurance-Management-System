const express = require('express')
const mongoose = require("mongoose");
const router = express.Router();

const bikeInsurancePolicySchema = new mongoose.Schema({
  policy_id: { 
    type: String, required: true, unique: true
 },
  policy_number: {
     type: String, required: true
     },
  customer_id: {
     type: String, required: false 
     },
  type: { 
    type: String, required: false  
},
  status: { 
    type: String, required: true 

  },
  start_date: { 
    type: String, required: true

   },
  end_date: { 
    type: String, required: true

   },
  coverage_amount: { 
    type: Number, required: true

   },
  premium: { 
    type: Number, required: true 

  },
  currency: { 
    type: String, required: true 

  }
});

module.exports = mongoose.model('BikeInsurancePolicy', bikeInsurancePolicySchema);
