/*============================================ Connection String =====================================================*/

// server
let connectionString = process.env.CONNECT_MONGO

//local
// let connectionString = 'mongodb://localhost:27017/invoiceManagement'

/*========================================== MongoDB Connection ======================================================*/
let mongoose = require('mongoose')
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

let mongoDb = mongoose.connection
mongoDb.on('error', () => {
    console.log("error connecting to mongo")
})
mongoDb.on('open', () => {
    console.log("connected")
})
