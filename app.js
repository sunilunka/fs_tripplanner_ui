var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var morgan = require("morgan");
var sassMiddleware = require("node-sass-middleware");
var path = require("path");
var app = express();
var router = require('./routes');
var swig = require("swig");

app.engine("html", swig.renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/views");



app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'assets'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    // outputStyle: 'compressed',
    // prefix:  'public/stylesheets'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use("/bower_components", express.static(path.join(__dirname, 'bower_components')));



app.use("/", router);

// catch 404 (i.e., no route was hit) and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.render("error", function(err, html){
      res.send(html);
    });
});






app.listen(3000);