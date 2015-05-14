var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define schema for user model
var userSchema = mongoose.Schema({
	local: {
		email: String,
		password: String,
		firstname: String
	}
});

/* methods */
// generate hash
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check password
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);

};

// create model for users, expose to app
module.exports = mongoose.model('User', userSchema);
