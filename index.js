const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send(`Hello, SEI World! It's me, Jeremy! Thanks for stopping by. My blog is at localhost:8000/blog. Check it out!`);
})

app.get('/about', function(req, res) {
    res.send('You\'ve reached the about page!');
})

app.get('/blog', (req, res) => {
    res.send('This is the blog of Jeremy Bearimy');
})

app.listen(8000);
