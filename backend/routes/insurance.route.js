const express = require('express')
const router = express.Router();

const { getInsurance, createInsurance, updateInsurance, deleteInsurance } = require('../controllers/insurance.controller')


router.get("/", getInsurance)

router.post("/", createInsurance); 

router.put("/:id", updateInsurance)

router.delete("/:id", deleteInsurance)

module.exports = router;