import express, { Router } from 'express';
const app = express();
import { join } from 'path';
const router = Router();

router.get('/', function (req, res) {
    res.sendFile(join(__dirname + '/src/index.html'));
});




app.use('/', router);
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);