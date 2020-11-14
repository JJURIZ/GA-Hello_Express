const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index')
})

app.get('/about', function(req, res) {
    res.render('about')
})

const blog = app.get('/blog/:date', (req, res) => {
    const theDateTheyWant = req.params.date
    res.render('blog', { date: theDateTheyWant })
})

app.listen(8000, () => {
    console.log('server started!')
});

