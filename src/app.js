const express = require ('express')
const path = require ('path')
const app = express();                                          
const publicPth = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const mainRouter = require('./routes/main.js');
const productRouter = require('./routes/products.js');
const userRouter = require('./routes/users.js');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const cookieParser = require('cookie-parser');
const session = require('express-session');



app.use(express.static(publicPth) );
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log('Servidor Corriendo en el Puerto 3000');
});
app.use(session({
    secret: 'Secreto',
    resave : false,
    saveUninitialized: false}
));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use('/', mainRouter);
app.use('/products', productRouter);
app.use('/user', userRouter); 
app.use(express.json());
app.use(cookieParser());

