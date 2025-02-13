// Imports
const express = require('express');
const nodemailer = require('nodemailer');
// const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
// const bodyParser = require('body-parser');
const { body } = require('express-validator');

// Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

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

// POST Route for Contact Submission Form
app.post('/send', (req, res) => {
    console.log(req.body);
    
    const output = `
    <p> You have a new contact request </p>
    <h3> Contact Details </h3>
    <ul style='list-style: none'>
        <li>First Name: ${req.body.firstname}</li>
        <li>Last Name: ${req.body.lastname}</li>
        <li>E-mail: ${req.body.email}</li>
        <li>Phone Number: ${req.body.number}</li>
        <li>Date: ${req.body.date}</li>
    </ul>
    <h3> Message </h3>
    <p>${req.body.message} </p>
    `;

    const plainText = `Message: ${req.body.message}. From: ${req.body.firstname} ${req.body.lastname}. Phone number: ${req.body.number}`

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // Ethereal Mail Account Info
        // Name: Whitney Ziemann
        // Username: whitney14@ethereal.email
        // Password: 1MDm8QVxjvabqh9PzB
    
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'whitney14@ethereal.email', // generated ethereal user
                pass: '1MDm8QVxjvabqh9PzB', // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
        from: '"Nodemailer Contact 👻" <whitney14@ethereal.email>', // sender address
        to: "egluna@live.ca", // list of receivers
        subject: "Nodemailer Test", // Subject line
        text: plainText, // plain text body
        html: output // html body
        });
    
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
    
    main().catch(console.error);

    res.render('contact', {msg: 'Email has been sent'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));