const express = require('express')

const mongoose = require("mongoose");
const router = express.Router();


const insuranceSchema = new mongoose.Schema({

    image: String,
    name: String,
    title: String,
    carMake: String,
    carModel: String,
    carYear: Number,
    carType: String,
    vehicleValue: Number,
    premiumAmount: Number,
    policyDuration: String,
},{
    timestamps: true 
})

const InsuranceModel = mongoose.model('Insurance', insuranceSchema);

module.exports = InsuranceModel;
