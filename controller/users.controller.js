const UserService = require('../service/user.service')

exports.getUser = async (req, res) => {
    try {
        var msgs = await UserService.getUser(req.body)
        return res.status(200).json({
            status: 200,
            message: "Succesfully USER Retrieved",
            data: msgs
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        await MsgService.createMessage(req.body)
        return res.status(200).json({
            status: 200,
            message: `USER was created successfully`
        })
    } catch (e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}