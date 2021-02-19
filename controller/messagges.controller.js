const MsgService = require('../service/message.service')

exports.getMsgs = async (req, res) => {
    try {

        data = {

        }
        //  how to manage it!

        var msgs = await MsgService.getMessages(query)
        // need to update thhis data with seen = true
        return res.status(200).json({
            status: 200,
            message: "Succesfully Msgs Retrieved",
            data: msgs
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.createMsg = async (req, res) => {
    try {
        await MsgService.createMessage(req.body)
        return res.status(200).json({
            status: 200,
            message: `Message was created successfully`
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}