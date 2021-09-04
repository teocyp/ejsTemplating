const express = require('express');
const app = express();
const path = require('path');

// app.set - this command tells the app to use ejs, view engine enables us to use static template files in our app.

// At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
app.set('view engine', 'ejs');

//to run the file and match with the views directory on any place of the working directory
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs', { rand: num })
})

app.listen(8080, () => {
    console.log('Listening on port: 8080');
})