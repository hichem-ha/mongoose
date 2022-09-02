const mongoose = require("mongoose");

const connectDB = async ()=> {
try {
    await mongoose.connect("mongodb+srv://nouhe:qjneGHXW8JalE3up@cluster0.thotscp.mongodb.net/test")
    console.log("db is connected")
} catch (error) {
    console.log(error)
}

}
module.exports = connectDB;