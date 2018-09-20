
const express = require('express');
const app = express();
var cors = require('cors');
const router = require('./router');

const port = 3010;

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, console.log('listening in port 3010'));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/love', (req, res) => { res.send('Hi Love')}) 