
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db');
const router = require('./routes/insurance.route')
const routerVerification = require('./routes/userRoutes')
const paymentRoutes = require('./routes/insurancePaymentRoutes');
const policyRoutes = require('./routes/insurancePolicy'); 
const bikePolicyRoutes = require('./routes/bikeInsurancePolicy'); 
const healthPoliciesRoutes = require('./routes/healthInsurancePolicy'); 
const termPoliciesRoutes = require('./routes/termInsurancePolicy'); 
const investmentPoliciesRoutes = require('./routes/investmentInsurancePolicy'); 

const razorpayPayments = require('./routes/razorpayRoutes'); 
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json()); 

app.use(cors({ origin: 'http://localhost:3000' }));
app.use("/api/insurance", router)
app.use(`/api/users`, routerVerification)
app.use('/api/insurancePayment', paymentRoutes);
app.use('/api/policies', policyRoutes);
app.use('/api/bikePolicies', bikePolicyRoutes);
app.use('/api/healthPolicies', healthPoliciesRoutes);
app.use('/api/termPolicies', termPoliciesRoutes);
app.use('/api/investmentPolicies', investmentPoliciesRoutes);

app.use('/api/razorpayPayments', razorpayPayments);
app.use('/api/payment', paymentRoutes);


app.get('/', (req, res) => {
    res.send('API is working!');
});

connectDB();
app.listen(5000, () =>{
    console.log("server started at http://localhost:5000");
    
})