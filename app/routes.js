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
	})

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