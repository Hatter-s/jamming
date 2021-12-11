const path = require('path')
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');

//basic setup
const app = express();
const port = 3000;
app.use(morgan('combined'));
app.engine('hbs', engine(
    {extname: '.hbs'}
));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//static file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Jamming was listened in http://localhost:${port}`);
})
