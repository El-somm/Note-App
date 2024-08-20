require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB= require('./server/config/db');

const session = require('express-session');
const passport = require('passport');
const Mongostore = require('connect-mongo');

const app = express();
const PORT = 3000;

app.use(session({ 
    secret: 'Jsv6hpW2',
     resave: false,
     saveUninitialized: true,
    store: Mongostore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: { maxAge: 3600000 }
 }));


 
app.use(passport.initialize());
app.use(passport.session());

connectDB();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));

// static files
app.use(express.static('public'));

app.use(session({
    secret: 'Jsv6hpW2', 
    resave: false,
    saveUninitialized: true,
    store: Mongostore.create({
        mongoUrl: process.env.MONGODB_URI
    })
}));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// // app.use(session({
// //     secret: 'Jsv6hpW2', 
// //     resave: false,
// //     saveUninitialized: true,
// //     store: Mongostore.create({
// //         mongoUrl: process.env.MONGODB_URI
// //     })
// // }));

// Handle 404
app.get('*', function(req, res) {
    res.status(404).send('404: Page Not Found.');
});


app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});






















// require('dotenv').config();

// const express = require('express');
// const expressLayouts = require('express-ejs-layouts');
// const connectDB = require('./server/config/db');
// const session = require('express-session');
//  const passport = require('passport');
// const Mongostore = require('connect-mongo');
// const authRoutes = require('./server/routes/authRoutes');

// const app = express();
// const PORT = 3000;

// app.use(session({ secret: 'Jsv6hpW2', resave: false, saveUninitialized: false }));
// app.use(passport.initialize());
// app.use(passport.session());




// app.use('/', authRoutes);

// // app.use(session({
// //     secret: 'Jsv6hpW2', 
// //     resave: false,
// //     saveUninitialized: true,
// //     store: Mongostore.create({
// //         mongoUrl: process.env.MONGODB_URI
// //     })
// // }));

// // app.use(passport.initialize());
// // app.use(passport.session());

// app.use(express.urlencoded({extended: true}));
// app.use(express.json());

// // Connect to Database
// connectDB();

// // static files
// app.use(express.static('public'));

// // Templating Engine
// app.use(expressLayouts);
// app.set('layout', './layouts/main');
// app.set('view engine', 'ejs');

// // Routes
// app.use('/', require('./server/routes/auth'));
// app.use('/', require('./server/routes/index'));
// app.use('/', require('./server/routes/dashboard'));

// // Handle 404
// app.get('*', function(req, res) {
//     res.status(404).send('404: Page Not Found.');
// });


// app.listen(PORT, () => {
//     console.log(`App listening on ${PORT}`);
// });