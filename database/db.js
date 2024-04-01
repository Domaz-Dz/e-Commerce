const mongoose = require('mongoose')
const db = ()=>{
    
    mongoose.connect(process.env.DB_URI).then((con)=>console.log(`Connected ${con.connection.host}`)).catch((err)=>{
        console.log(`Failed to connect ==> ${err}`)
        process.exit(1)
    })
}
module.exports = db