
const express= require('express')
// const Question = require('../models/question.js')
const router = express.Router();
const  verifyToken=require('../middlewares/validate-token');

//en un paso:
//const route = require('express').Router();
const Question = require('../models/question.js')

router.get('/read',verifyToken,(req,res)=>{
// router.get('/read',(req,res)=>{
   
    Question.find((err,questions)=>{
        if(err) return res.status(500).send({message:'error en la peticion'})
        if(!questions) return res.status(404).send({message:' no existe'})
        res.status(200).send({questions})
  
    })


    
})

router.get('/read/:id',verifyToken,(req,res)=>{
   let id=req.params.id
  Question.findById(id,(err,questions)=>{
      if(err) return res.status(500).send({message:'error en la peticion'})
      if(!questions) return res.status(404).send({message:' no existe'})
      res.status(200).send({questions})

  })


  
})


router.post('/create', verifyToken, async (req,res)=>{

  let question = new Question();
      question.title =req.body.title
      question.answers=req.body.answers
      question.correct=req.body.correct

    await  question.save((err, questionStored)=> {
        if(err) res.status(500).send({message: 'error al salvar la bd'})
        res.status(200).send(JSON.stringify({question:questionStored}))
      })
    
  
})

router.put('/update/:id',verifyToken, (req,res)=>{
    let id = req.params.id;
    console.log(id)
    let update=req.body;
    console.log(update)

   
 Question.findByIdAndUpdate(id, update,(err,questionUpdate)=>{
      if (err) return console.error(err);
      if(!questionUpdate) return res.status(404).send({message:"la pregunta no existe"})
      res.status(200).send(JSON.stringify({questionUpdate,
      registro:"cambiado"}))
    })
  


})

router.delete('/delete/:id',verifyToken,(req,res)=>{
    let id = req.params.id;
    Question.findByIdAndDelete(id, (err, question)=> {
      if (err) return console.error(err);
      if(!question) return res.status(404).send({message:"la pregunta no existe"})
      res.send(JSON.stringify('la pregunta ha sido borrada'));

    })

})


module.exports= router;