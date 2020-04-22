const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

const usersRouter = require('./routes/users');
const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');


app.use(morgan('dev'));
//evitar que salga req.body undefined para bodies json y urlencoded
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use('/users',usersRouter);
app.use('/categories',categoriesRouter);
app.use('/products',productsRouter);
app.use('/orders',ordersRouter);
app.listen(PORT,()=>console.log('server running on port '+PORT));