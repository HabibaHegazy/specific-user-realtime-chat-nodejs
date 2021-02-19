const mongoose = require("mongoose")
const Schema = mongoose.Schema

const messageSchema = new Schema({
    message: { type: String },
    sender: { type: Schema.ObjectId, ref: 'Users' },
    reciver: { type: String, ref: 'Users' },
    seen: { type: Boolean, defult: false },
    createdAt: { type: Date, defult: Date.now() }
})

module.exports = mongoose.model('messages', messageSchema, 'Messages')