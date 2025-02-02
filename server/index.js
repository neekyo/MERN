const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./passport/index');

mongoose.connect(keys.mongoURI, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
	console.log('Connected to Mongo instance');
});
mongoose.connection.on('error', (err) => {
	console.error('Error connecting to Mongo', err);
});

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [ keys.cookieKey ]
	})
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	app.use(express.static(path.resolve(__dirname, '../client/build')));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
