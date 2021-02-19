const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    username: { type: String, unique: true },
    socketId: { type: Number, defult: Number(Date.now()) },
    createdAt: { type: Date, defult: Date.now() }
})

module.exports = mongoose.model('users', userSchema, 'Users')