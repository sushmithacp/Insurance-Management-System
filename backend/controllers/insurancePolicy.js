const express = require('express')
const mongoose = require("mongoose")
const Policy = require('../models/InsurancePolicy');

// Create
const createPolicy = async (req, res) => {
  try {
    const newPolicy = new Policy(req.body);
    const savedPolicy = await newPolicy.save();
    res.status(201).json(savedPolicy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read All
const getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
const updatePolicy = async (req, res) => {
  try {
    const updatedPolicy = await Policy.findOneAndUpdate(
      { policy_id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updatedPolicy) return res.status(404).json({ error: 'Policy not found' });
    res.json(updatedPolicy);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
const deletePolicy = async (req, res) => {
  try {
    const result = await Policy.findOneAndDelete({ policy_id: req.params.id });
    if (!result) return res.status(404).json({ error: 'Policy not found' });
    res.json({ message: 'Policy deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {createPolicy, getAllPolicies, updatePolicy, deletePolicy}
