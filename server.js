const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const db = require('./db.js');

db.sync(() => console.log("Banco de dados rodando."))

// Rotas
const user = require('./routes/user');
const auth = require('./routes/auth');
const product = require('./routes/product');
const category = require('./routes/category');

app.get('/', async (req, res) => {
    res.send('App is running.')
});

app.use('/user', user);
app.use('/auth', auth);
app.use('/product', product);
app.use('/category', category);

db.sync(() => console.log("Banco de dados rondando."));
app.listen(port, function(){
    console.log("Aplicação rodando.");
});