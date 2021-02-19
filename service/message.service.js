const MsgModel = require('../model/messages.model')

exports.getMessages = async (query) => {
    try {
        var msgs = await MsgModel.find(query)
        return msgs
    } catch (e) {
        throw Error('Error while getting messages!!')
    }
}

exports.createMessage = async (query) => {
    try {
        var msg = await new MsgModel(query)
        return msg.save()
    } catch (e) {
        throw Error('Error while creating a message!!')
    }
}

exports.updateMessage = async (query, data) => {
    try {
        await MsgModel.findOneAndUpdate(query, data)
    } catch (e) {
        throw Error('Error while updating a message!!')
    }
}
