const express = require('express');
const api = require('./api');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.json ({
        message: "Welcome to ScyllaDB"
    });
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", `http://localhost:3000`); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use('/api', api);
app.use(cors());

app.listen(PORT, () => {
    console.log(`Listening to https://localhost:${PORT}`);
});