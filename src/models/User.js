const {Schema, model}= require('mongoose')
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
        email:{ 
                type: String,
                required:true

        },
        password:{
                type: String,
                required:true


        }


})

//este método encripta una contraseña que le pasemos.
userSchema.methods.encryptPassword=async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

//comparar contraseñas
//utilizamos el this ... no usamos funcion flecha porque no podriamos utilizar this
userSchema.methods.matchPassword = async function(password){
        return await bcrypt.compare(password, this.password);
} 
const User = model('user', userSchema); 
module.exports= User;