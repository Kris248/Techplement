
const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    phoneNumber: String,
    address: String,
    gender: String,
  });

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile