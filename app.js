const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index');
});


let mainRouter = require('./routes/main.routes');
app.use('/', mainRouter);

// Manejo del error de puerto en uso
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`El servidor está corriendo en: http://localhost:${PORT}`));