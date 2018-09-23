var mongoose = require('mongoose');
mongoose.connect('mongodb://DeshpandeAnurag:Happyhome123@ds111913.mlab.com:11913/part');
var db = mongoose.connection;

// user schema
var UserSchema = mongoose.Schema({
    username: {
        type: String,
        index: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        index: true
    },
    name:{
        type: String
    },
    rallyInfo: {
        token: {
            type: String
        }
    }
});

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
    newUser.save(callback);
};