import express from 'express';

const app = express()

app.get('/', function (req, res) {
    res.sendFile('.\src\index.html');
});
app.listen(process.env.PORT || 5000), () => console.log('Server working.')