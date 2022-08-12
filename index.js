const express = require('express');
const app = express(); // create a router.get method to resolve index.html 
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(process.env || 3000, () => {    // listen to port 3000  
    console.log('Server is running on port 3000');
});

app.use('/', router);


