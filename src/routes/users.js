//autenticación de usuarios
require('dotenv').config()
const express= require('express')
const bcrypt= require('bcryptjs')
const router = express.Router();
const User = require('../models/User.js')

const jwt=require('jsonwebtoken')
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

token=jwt.sign({ user }, process.env.SECRET_TOKEN, (err,token)=>{
           if(err) res.status(400).send("error al crear secret")
           console.log("este es el token generado "+token)
           
           res.header('auth-token', token).json({
            error: null,
            data: {token}
        })

       });
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