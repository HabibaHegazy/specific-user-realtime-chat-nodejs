const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const path = require('path')

const express = require('express')
const app = express()
const server = require('http').Server(app)
const socket = require('socket.io')(server)


const port = 8080

// database connection
const connect = require("./dbconnect")

// frontend thing
app.use(express.static(path.join(__dirname, "public")))

// const chatRouter = require("./chat.route")
// app.use("/chats", chatRouter)

// const loginRouter = require("./login.route")
// app.use("/login", loginRouter)


// server and socket -- setup event listener
socket.on("connection", socket => {
    console.log("user connected")
    // check if user got messages or not to send

    socket.on("disconnect", function () {
        console.log("user disconnected")
    })

    // //Someone is typing
    // socket.on("typing", data => {
    //     socket.broadcast.emit("notifyTyping", {
    //         user: data.user,
    //         message: data.message
    //     })
    // })

    // //when soemone stops typing
    // socket.on("stopTyping", () => {
    //     socket.broadcast.emit("notifyStopTyping")
    // })

    socket.on("chat message", function (msg) {
        // the user will send his own ID, reciever ID and msg
        // 
    })
})

server.listen(port, function () {
    console.log('Listening on port ' + port)
})