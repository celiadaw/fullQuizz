//autenticación de usuarios
require('dotenv').config()
const express= require('express')
const bcrypt= require('bcryptjs')
const router = express.Router();
const User = require('../models/User.js')
// const passport=require('passport')
// const jwt=require('jsonwebtoken')
const jwtS=require('jwt-simple')
const moment=require('moment')
//carga de datos

// const password="prueba";
// const email="celia@hotmail.com";
// const newUser =new User({email, password})
// newUser.password = bcrypt.hashSync(password, 10);
// // newUser.password=newUser.encryptPassword(password)
//  newUser.save();
// console.log("el nuevo profesor "+newUser+" se ha registrado")



function hashEqual(password, user, res) {
    
   bcrypt.compare(password, user.password, function (err, isMatch) {
       if (err) throw err;
      
       if (isMatch) {
           
           return user;
       }else{
           res.status(400).send("Contraseña erronea")
       }
   });

}
function createToken(user,res){
        let payload={
            sub: user._id,
            iat:moment().unix,
            exp:moment().add(2, 'hours').unix()
        };
     let token=jwtS.encode(payload, process.env.SECRET_TOKEN)
     res.headers({token:token})  
        // localStorage.setItem(user._id, token)

}
router.post('/singin', (req, res,next) => {
  
   email = req.body.email
  password = req.body.password
  
   User.findOne({ email })
       .then(user =>  {
           if (!user) {
               res.status(404).send("no existe..");
             } else {
               
                 return user
             }
       } )
       .then(user => hashEqual(password, user,res))
 
       .then (user=>{  createToken(user,res) })
       
       .catch(err => {
           res.status(500).send({ err });
       })
      
        next()
})
router.get('/admin/signout',(req,res)=>{


})


module.exports= router;