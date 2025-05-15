const express = require('express')
const mongoose = require("mongoose");
// const router = require('./routes/insurance.route')
// const router = express.Router();
const InsuranceModel = require('../models/insurance.model');

 const getInsurance = async (req,res) => { 
    try {
      const insurance = await InsuranceModel.find({});
      res.status(200).json({success: true, data: insurance})

    } catch (error) {
        
    }
 }

  const createInsurance = async (req, res) => {
    const insurance = req.body; 

    

    const newInsurance = new InsuranceModel(insurance)

    try {
        await newInsurance.save();
        res.status(201).json({success: true, data: newInsurance});
    } catch (error){

    }
}

 const updateInsurance =  async (req, res) => {
    const {id} = req.params; 
    const insurance = req.body;
        

    try {
        const updatedInsurance = await InsuranceModel.findByIdAndUpdate(id, insurance);
        res.status(200).json({success: true, data: updatedInsurance});
    } catch (error) {
        res.status(500).json({success: false, message: "server error"})
        
    }
}

 const deleteInsurance =  async (req, res) => {
    const {id} = req.params;

    try {
        await InsuranceModel.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "product deleted"})
    } catch (error) {
        res.status(404).json({success: false, message: "product not found"})
        
    }
}

module.exports = {getInsurance, createInsurance, updateInsurance, deleteInsurance}