const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'Package')));

const createPath = (page) => path.resolve(__dirname, 'Package', `${page}.html`);

app.get('/', (req, res) => {
    res.sendFile(createPath('newmda'));
});

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is on port ${PORT}`);
});
