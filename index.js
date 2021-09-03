const express = require('express');
const app = express();


// app.set - this command tells the app to use ejs, view engine enables us to use static template files in our app.

// At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home.ejs')
})

app.get('/rand', (req, res) => {
    res.render('random')
})

app.listen(8080, () => {
    console.log('Listening on port: 8080');
})