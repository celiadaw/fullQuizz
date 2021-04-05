
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  title: {
      type: String,
      required: 'El campo question es obligatorio'
  },
 answers:[],
 correct:{ type: Number, 
            required: true
          }
});


  
  const Question= mongoose.model('Question', questionSchema);
  module.exports = Question;


  