import express, { Router } from 'express';
const app = express();
const router = Router();

router.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

router.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.use('/', router);
app.listen(process.env.PORT || 3000, () => console.log('Running.'))


