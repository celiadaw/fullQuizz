require('dotenv').config()
// const jwt = require('jsonwebtoken')
const jwtS = require('jwt-simple')
const moment=require('moment')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {

    console.log(req.headers.authorization+ "cabeceras")
   if(!req.headers.authorization){
       return res.status(403).send({message: "no hay cabecera de autorización"})
   }


let token= req.headers.authorization.split(" ")[1];
let payload= jwtS.decode(token, process.env.SECRET_TOKEN);
if (payload.exp<= moment().unix()){
    return res.status({message:"el token ha expirado"})

}

req.user=payload.sub

next();
}

module.exports = verifyToken;