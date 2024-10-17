// app.js
const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send('Application 4 succesfully deployed');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
