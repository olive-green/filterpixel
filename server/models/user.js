const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    default_id: {
        type: Number,
        auto:true 
    },
    username: String,
    password: String
  });
const User = mongoose.model('User', userSchema);

module.exports = User;