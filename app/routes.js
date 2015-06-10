module.exports = function(app, passport) {

	/* Home Page */
	app.get('/', function(req, res) {
		res.render('index', {
			title: "Home",
			user: req.user
		});
	});


	/* Login */
	app.get('/login', function(req, res) {
		res.render('login', {
			title: "Login", 
			message: req.flash('loginMessage')
		});
	});

	// process the login form
    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


	/* Signup */
	app.get('/signup', function(req, res) {
		res.render('signup', {
			title: "Sign Up", 
			message: req.flash('signupMessage')
		});
	});

	// process the signup form
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));


	/* Profile */
	app.get('/profile', ensureAuthenticated, function(req, res) {
		res.render('profile', {
			title: "Profile", 
			user: req.user
		});
	});


	/* Logout */
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});



	/* Vizualization */
	app.get('/visualization', function(req, res) {
		res.render('visualization', {title: 'Vizualization'});
	});

	/* TIps */
	app.get('/tips', function(req, res) {
		res.render('tips', {title: 'Tips'});
	});

	/* Google maps page */
	app.post('/googlemaps', function(req, res) {
		var dataset =req.body.dataset;
		var gender = req.body.gender;
		var age = req.body.age;
		console.log(dataset);
		console.log(gender);
		console.log(age);
		res.render('googlemaps', {title: 'Google Maps', dataset: dataset, age: age, gender: gender});
	});

	app.get('/googlemaps', function(req, res) {
		res.redirect('/');
	});


	/* Facebook friends page */
	app.get('/facebookfriends', function(req, res) {
		res.render('facebookfriends', {title: 'Facebook Friends'});
	});

	/* Delphi */ /*
	app.get('/delphidata', function(req, res){
		var dotenv = require('dotenv');
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
});
*/

app.get('/delphidata', function (req, res) {
	var dotenv = require('dotenv');
	dotenv.load();
	var pg = require('pg');
	var conString = "postgres://" +
                       process.env.DELPHI_USERNAME + ":" +
                       process.env.DELPHI_PASSWORD +
                       "@delphidata.ucsd.edu:5432/delphibetadb";

	pg.connect(conString, function(err, client, done) {
    if (err) {
        return console.error('Error connecting to Delphi: ', err);
    }
    // initialize connection pool 
    pg.connect(conString, function(err, client, done) {
      if(err) return console.log(err);
      var results = [];
      var query = client.query('SELECT * FROM hhsa_suicide_by_age_2010_2012 ORDER BY "Death Rate" DESC LIMIT 20');
     
      query.on('row', function(row) {
      	results.push(row);
      });
      query.on('end', function() {
      	client.end();
      	return res.json(results);
      });
      
    });
  });
});


	// Simple route middleware to ensure user is authenticated.
	//   Use this route middleware on any resource that needs to be protected.  If
	//   the request is authenticated (typically via a persistent login session),
	//   the request will proceed.  Otherwise, the user will be redirected to the
	//   login page.
	function ensureAuthenticated(req, res, next) {
  		if (req.isAuthenticated()) { 
    		return next(); 
  		}
  		res.redirect('/login');
	}

}