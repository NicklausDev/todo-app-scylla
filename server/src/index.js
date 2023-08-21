const express = require('express');
const api = require('./api');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.json ({
        message: "Welcome to ScyllaDB"
    });
});

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Listening to https://localhost:${PORT}`);
});