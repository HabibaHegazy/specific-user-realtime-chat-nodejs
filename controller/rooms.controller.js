const RoomService = require('../service/message.service')

exports.getRooms = async (socket, data) => {
    try {
        const page = data.page ? data.page : 1
        const limit = data.limit ? data.limit : 3

        const rooms = await RoomService.getRooms(query, page, limit)
        socket.emit('body', {
            status: 200,
            message: "Succesfully USER Retrieved",
            data: rooms
        })
    } catch (e) {
        socket.emit('body', {
            status: 400,
            message: e.message
        })
    }
}

exports.updateRoom = async (socket, data) => {
    try {

        // TODO: check if there is a room
        // create message
        // update room

        socket.emit('body', {
            status: 200,
            message: "Succesfully MESSAGE sent"
        })
    } catch (e) {
        socket.emit('body', {
            status: 400,
            message: e.message
        })
    }
}