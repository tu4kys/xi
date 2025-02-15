const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

// Указываем статическую папку для обслуживания
app.use(express.static(path.join(__dirname)));

// Функция для создания пути к HTML файлам в корне
const createPath = (page) => path.resolve(__dirname, `${page}.html`);

app.get('/', (req, res) => {
    res.sendFile(createPath('newmda')); // Теперь просто передаем имя файла без пути
});

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`Server is on port ${PORT}`);
});
