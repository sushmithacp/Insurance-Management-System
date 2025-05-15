const mongoose = require('mongoose') 

let UserSchema = new mongoose.Schema({
    username:{
        type: String,
        reuired: true
    },
    password:{
        type: String,
        reuired: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'], 
        default: 'user'
    }
})
const User = mongoose.model('User', UserSchema);

module.exports = User;