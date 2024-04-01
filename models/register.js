const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user:String,
    age:Number,
    email:String,
    password:String
})
const Usermodel = mongoose.model('user',userSchema)
module.exports = Usermodel