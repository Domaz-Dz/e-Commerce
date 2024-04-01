const routerReg = require('express').Router()
const {registerUser} = require('../controller/register')
routerReg.post('/register',registerUser)
module.exports = routerReg