var dotenv = require('dotenv');

dotenv.load();
var MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

module.exports = {
	'url' : MONGODB_CONNECTION_URL,
}