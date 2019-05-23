const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/about', (req, res) => {
    res.send("Yooooooooooooo");
});

const port = (process.env.PORT || 4000)

app.listen(port, () => console.log(`Listening on port ${port}`));