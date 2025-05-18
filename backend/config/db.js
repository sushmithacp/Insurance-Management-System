
const mongoose = require("mongoose");

 let connectDB = async () => {
    try {
         await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
        
    } catch (error) {
        
    }
}
module.exports = connectDB