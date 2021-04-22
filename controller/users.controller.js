const UserService = require('../service/user.service')
const RoomController = require('../controller/rooms.controller')

exports.getUser = async (socket, username) => {
    try {
        const user = await UserService.getUser({ username: username })
        socket.id = user._id
        socket.emit('body', {
            status: 200,
            message: "Succesfully USER Retrieved",
            data: user
        })
    } catch (e) {
        socket.emit('body', {
            status: 400,
            message: e.message
        })
    }
}