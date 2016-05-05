var mongoose = require('mongoose');

// define the schema for our user model
var tripviewSchema = mongoose.Schema({
    upc : String,
    Day : String,
    Act : String
});

// // generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// // create the model for users and expose it to our app
module.exports = mongoose.model('tripviews', tripviewSchema);
