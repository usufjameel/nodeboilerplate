const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    _id: {
        type: String
    },

    name: {
        type: String,
        required: false
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true
    },

    isActive: {
        type: String,
        default: true
    }
});


module.exports = mongoose.model('User', userSchema);
