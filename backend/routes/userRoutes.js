const express = require('express') 
const router = express.Router(); 
const { verifyToken, authorizeRole } = require('../middleware/userVerification')
const { register, login, profile, admin } = require('../controllers/userController') 




router.post('/register', register)
router.post('/login', login )

router.get('/profile', verifyToken, authorizeRole(['user', 'admin']), profile );
router.get('/admin', verifyToken, authorizeRole(['admin']), admin);

module.exports = router; 