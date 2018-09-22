
const express = require('express');

const app = express();
const cors = require('cors');
const router = require('./router');

const port = 3010;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.listen(port, console.log('listening in port 3010'));
