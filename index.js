const express = require('express');
const helmet = require('helmet');
const db = require('./data/connection');
const server = express();
const PORT = process.env.PORT || 5000;

server.use(helmet());
server.use(express.json());

server.get('/', (req,res) => {
    db
    .select('*')
    .from('cars')
    .then(cars => {
        res.status(200).json(cars);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.post('/', (req,res) => {
    db('cars')
    .insert({ make: 'not toyota' }, '*')
    .then(car => {
        res.status(201).json(car)
    })
    .catch(err => {
        res.status(500).json(err)
    });
});

server.put('/:id', (req,res) => {
    db('cars')
    .where('id', req.params.id)
    .update(req.body)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

server.delete('/:id',  (req,res) => {
    db('cars')
    .where('id', req.params.id)
    .del()
    .then(car => {
        res.status(202).json(car)
    })
    .catch(err => {
        res.status(500).json(err)
    })
});

server.listen(PORT, () => console.log(`Server started on port: ${PORT}...`));