var express = require('express');
var app = express();
var router = express.Router();

app.use(function readBody (req, res, next) {
    var data = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        req.body = data;
        next();
    });
});

var logins = {
  "asdf-asdf-asdf-asdf": {city: "philly", role: "superuser"}
};

router.use(function authUsers(req, res, next) {
  var auth = req.headers["authorization"];
  if (!auth || !logins[auth]) {
    res.sendStatus(401);
    return;
  }

  req.user = logins[auth]; 
  return next();
})

router.put('/profile', (req, res) => {
  var update = JSON.parse(req.body);
  req.user[update.name] = update.value;
  res.sendStatus(200);
})

router.get('/profile', (req, res) => {
  res.json(req.user);
})

app.use('/api', router)
app.use(express.static('public'));
var server = app.listen(7777);
