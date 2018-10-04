var express = require("express");
var bodyParser = require('body-parser');
var path = require("path")
var app = express();
var DIST_DIRC = path.join(__dirname, './../client/dist/index.html');
var DATABASE = path.join(__dirname, './../database/index')
var User = require(DATABASE)
// '/Users/shahrooz/Desktop/newUC/client/dist/index.html'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));







app.get('/login', function(req,res) {

  res.sendFile(DIST_DIRC)
})
app.get('/newacct', function(req,res) {
  console.log("newAcct Get")
  res.sendFile(DIST_DIRC)
})

app.get('/happyhour', function(req,res) {

  res.sendFile(DIST_DIRC)
})

app.get('/nearby', function(req,res) {

  res.sendFile(DIST_DIRC)
})

app.get('/deals', function(req,res) {

  res.sendFile(DIST_DIRC)
})

app.get('/contact', function(req,res) {

  res.sendFile(DIST_DIRC)
})

app.post('/newacct', function(req,res) {
 // console.log(User.SaveUser)

User.SaveUser(function(err,data) {
  console.log('ERR:', err, 'Data', data)
  if(data === null) {
    res.sendStatus(500)
  } else {
    res.json(data)
  }
}, req.body)


  // res.sendFile(DIST_DIRC)
})

app.get("/newacct", function (req, res) {
  User.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(err);
    } else {
      console.log('this is my data in server get ', data)
      res.json(data)
    }
  });

});

app.listen(3000, function() {
  console.log(`Hello Alex, I am listening to port 3000`);
});
