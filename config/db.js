const mongoose = require('mongoose')
const config = require('config')

const db = config.get('MongoURI')

const connectDB = async () => {
    try{
        await mongoose.connect(db, { useNewUrlParser: true  })
        console.log("MongoDB connected")
    } catch(e){
        console.error(e.message)
        process.exit(1)
    }

}

module.exports = connectDB