//config/express.js
var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('expression-session');
var passport = require('passport');

module.exports = function(){
  var app = express();

  // configuração de ambiente
  app.set('port', 8181);
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  //middleware
  app.use(cookieParser());
  app.use(session(
    { secret: 'homem avestruz',
      resave: true,
      saveUnitialized true
    }
  ));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static('./public'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());

  load('models', {cwd: 'app'})
      .then('controllers')
      .then('routes')
      .into(app);

  return app;
}
