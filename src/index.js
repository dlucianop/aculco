const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'static', 'inicio.html'));
});

/*Enrutamientos para Gobierno municipal */

app.get('/gobierno-municipal', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'static', 'gob-municipal.html'));
});

app.get('/gobierno-municipal/presidencia', (req, res) => {
    res.sendFile(path.join(__dirname,'..' ,'static', 'gob-municipal.html'));
});











app.listen(3000);

console.log(`Server on port ${3000}`)