// dependencies ==============
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var dotenv = require('dotenv');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var app = express();

// local dependencies
var configDB = require('./config/database.js');

// database connection
mongoose.connect(configDB.url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Database connected succesfully.");
});

// postgres database (Delphi)
dotenv.load();
var pg = require('pg');
var connectionString = "postgres://" +
                       process.env.DELPHI_USERNAME + ":" +
                       process.env.DELPHI_PASSWORD +
                       "@delphidata.ucsd.edu:5432/delphibetadb";

pg.connect(connectionString, function(err, client, done) {
    if (err) {
        return console.error('Error connecting to Delphi: ', err);
    }
    
    client.query('SELECT * FROM hhsa_suicide_by_age_2010_2012 ORDER BY "Death Rate" DESC LIMIT 20;', function(err, result) {
        done();
        
        if (err) {
            return console.error('PSQL ERR: ', err);
        }
        
        console.log(result);
     });
    
});

require('./config/passport')(passport); // pass passport for configuration

// configure application
app.use(morgan('dev'));
app.engine('handlebars', handlebars({defaultLayout: 'layout'}));
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// passport stuff
app.use(session({ secret: 'keyboard-cat',
                  saveUninitialized: true,
                  resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//set environment ports and start application
app.set('port', process.env.PORT || 3000);

// routes ==========
require('./app/routes.js')(app, passport);

// app start =======
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});




