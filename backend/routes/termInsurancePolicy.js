const express = require('express');
const router = express.Router();
const policyController = require('../controllers/termInsurancePolicy');

router.post('/', policyController.createPolicy);
router.get('/', policyController.getAllPolicies);
router.put('/:id', policyController.updatePolicy);
router.delete('/:id', policyController.deletePolicy);

module.exports = router;
