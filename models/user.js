const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    username: {type: String, required: true, unique: true, lowercase: true},
    username: {type: String, required: true}
});

module.exports = mongoose.model('user', userSchema);