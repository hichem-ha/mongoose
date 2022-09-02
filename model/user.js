const mongoose = require("mongoose");


const user = new mongoose.Schema({
name : {
    type : String,
    required : true
},
age  : {
    type : Number ,
},
favoritefood : {
    type : [String],
}
})
module.exports = mongoose.model('user', user);