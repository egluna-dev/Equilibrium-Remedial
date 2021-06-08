// Imports
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve Static Assets
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/imgs', express.static(__dirname + 'public/imgs'));
app.use('/logo-jpg', express.static(__dirname + 'public/logo-jpg'));

// Define routes
app.use('/about', require('./routes/api/about'));
app.use('/therapies', require('./routes/api/therapies'));
app.use('/pricing', require('./routes/api/pricing'));
app.use('/contact', require('./routes/api/contact'));
app.use('/covid', require('./routes/api/covid'));
app.use('/terms', require('./routes/api/terms'));
app.use('/privacy', require('./routes/api/privacy'));


// Home page Route
app.get('/', (req, res) => {
    res.render('index');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));