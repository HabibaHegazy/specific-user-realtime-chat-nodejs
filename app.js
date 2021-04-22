const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")
const path = require("path")

const express = require("express")
const app = express()
const server = require("http").Server(app)
const socket = require("socket.io")(server)

const port = 8080

// database connection
const connect = require("./dbconnect")

// frontend thing
app.use(
  express.static(path.join(__dirname, "/public"), { index: "login.html" })
)

// controllers
const userController = require('./controller/users.controller')
const roomController = require('./controller/rooms.controller')

// server and socket -- setup event listener
socket.on("connection", socket => {
  console.log("user connected")

  socket.on("login", username => {
    userController.getRooms(socket, username)
  })

  socket.on("get all messages", data => {
    roomController.getRooms(socket, data)
  })

  socket.on("chat message", data => {
    roomController.updateRoom(socket, data)
  })

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

})

server.listen(port, function () {
  console.log("Listening on port " + port)
})
