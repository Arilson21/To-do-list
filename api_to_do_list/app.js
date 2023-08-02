const express = require('express');
const app = express();
const router = require('./src/routes');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Pode especificar um domínio específico em vez de '*'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());

app.use(router)

app.listen(3000, () => {
    console.log('servidor iniciado');
});



