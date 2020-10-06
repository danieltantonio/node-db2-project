const express = require('express');
const db = require('./data/connection');
const server = express();
const PORT = process.env.PORT || 5000;

server.get('/', (req,res) => {
    res.status(200).json({ message: 'It works!' });
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}...`));