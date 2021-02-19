const mongoose = require("mongoose")
mongoose.Promise = require("bluebird")

const url = " mongodb+srv://HabibaHegazy:uSmNoWBAdhb52K0F@projectcluster2021.93atf.mongodb.net/Test-Database?retryWrites=true&w=majority"

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    console.log("Success Connection to database")
    mongoose.connection.once("open", function () {
        console.log("MongoDB database connection established successfully")
    })
}).catch(err => {
    console.error(err)
    process.exit(1)
})

module.exports = mongoose