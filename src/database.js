require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_MONGO, {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true })
    .then(db=>console.log('DB conectada'))
    .catch(error => (console.log(error)));


module.exports = mongoose;    