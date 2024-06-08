const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Настройка за достъп до статични файлове (HTML, CSS, JavaScript и други)
app.use(express.static(path.join(__dirname, 'public')));

// Рут за показване на календара
app.get('/calendar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Други рути и обработчици могат да бъдат добавени тук

// Стартиране на сървъра
app.listen(port, () => {
    console.log(`Сървърът стартира на http://localhost:${port}`);
});
