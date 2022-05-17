const express = require ('express')
const path = require ('path')

const app = express();                                          
const publicPth = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
const mainRouter = require('./routes/main.js');
const productRouter = require('./routes/products.js');
const userRouter = require('./routes/users.js');

app.use(express.static(publicPth) );

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log('Servidor Corriendo en el Puerto 3000');
});

app.use('/', mainRouter);
app.use('/product', productRouter);
app.use('/user', userRouter); 

//  app.get ('/', (req,res) => {
//      res.render('home')
//  });

//  app.get ('/loginRegister', (req,res) => {
//     res.sendFile(path.join(__dirname, "./views/loginRegister.html"))
// });

// app.get ('/productCart', (req,res) => {
//     res.sendFile(path.join(__dirname, "./views/productCart.html"))
// });

// app.get ('/productDetail', (req,res) => {
//     res.sendFile(path.join(__dirname, "./views/productDetail.html"))
// });