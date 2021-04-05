require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/quizz', {  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true })
    .then(db=>console.log('DB conectada'))
    .catch(error => (console.log(error)));


module.exports = mongoose;    