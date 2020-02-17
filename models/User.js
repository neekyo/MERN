const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	// username: { type: String, unique: true },
	// password: { type: String },
	googleId: String,
	googlePic: String
});

mongoose.model('users', userSchema);
