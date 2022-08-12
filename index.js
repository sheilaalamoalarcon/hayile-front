const express = require("express");
const app = express(); // create a router.get method to resolve index.html 
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.html'));
})

app.get('/src/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/src/index.css'));
})


app.listen(process.env.PORT || 3000, () => console.log('Running.'))

app.use(express.static(__dirname + '/src'));

