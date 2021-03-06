process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var mongoose = require('./config/mongoose.js'),
    express = require('./config/express.js'),
    passport = require('./config/passport.js');

var db = mongoose();
var app = express(db);
var passport = passport();

app.listen(3000);
module.exports = app;

console.log('Server running at http://localhost:3000/');