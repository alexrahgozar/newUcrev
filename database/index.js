var mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost/newacct');

var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
  // we're connected!
  console.log("we're connected!")
  });

var NewUserSchema = new mongoose.Schema({
  username: String,
  email: String,
  emailRe: String,
  password: String
});
//
var User = mongoose.model('User', NewUserSchema);

var SaveUser = function(callback, data) {
  User.find({email: data.email}, function(err,result) {
    if(result.length === 0) {
      var NewUser = new User(data);
      NewUser.save(function (err, data) {
        console.log('Saved', data);
        callback(data,data);
      });
    } else {
      console.log('Not Saved!');
      callback(err,null);
    }
  });
};

var selectAll = function(callback) {
  User.find({}, function(err, items) {
    console.log('Find: ', items);
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var findEmail = function(callback) {
  // User.remove({}, callback)
  User.find({email: callback.items}, function(err, items) {
    console.log('Find: ', items);
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.findEmail = findEmail;
module.exports.selectAll = selectAll;
module.exports.SaveUser = SaveUser;
