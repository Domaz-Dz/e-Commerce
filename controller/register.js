const userModel = require('../models/register')
exports.registerUser = (req,res)=>{
    const {user,age,email,password} = req.body
    const newUser = new userModel({user,age,email,password})
    newUser.save().then(respo=>respo.json(newUser)).catch(err=>res.json(err))
}