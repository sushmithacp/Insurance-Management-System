const express = require('express');
const router = express.Router();

const { createPayment, getAllPayments, updatePayment, deletePayment } = require('../controllers/insurancePaymentController');

router.post('/', createPayment);
router.get('/', getAllPayments);
router.put('/:id', updatePayment);
router.delete('/:id', deletePayment);

module.exports = router;
