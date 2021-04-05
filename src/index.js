require('dotenv').config()

const express=require('express')
const session = require('express-session')
const path = require('path')
const passport= require('passport')
const morgan=require('morgan')
//Initializations
const app=express();
const listenPort = process.env.PORT || 3001 ; 
//conectar la base de datos.
require('./database')
require('./configs/passport')


//settings


//express.urlencoded sirve para: "entender los datos que recibo de los formularios"
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
//session sirve para la sesión de un usuario, autenticación etc..configurar secret
app.use(session({
        secret: 'celia',
        resave: true,
        saveUninitialized:true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'))
//global variables


//Routes
app.use(require('./routes/index'))
const auth=app.use(require('./routes/users'))
app.use(require('./routes/crudQuizz'))
// app.use(require('./configs/adminCreate'))


//Static files
app.use(express.static(path.join(__dirname,'public')))
//middlewares
// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

// route middlewares
// app.use('/read', verifyToken, zonaAdminRoutes);


//Server init

app.listen(listenPort,
    () => console.log(`Server started listening on ${listenPort}`)
);
