// Server code - (c) <current year> Express team.
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
 
var app = express()

// HTTPS redir code - (c) 2014 IBM Corp. 
app.enable('trust proxy');
app.use (function (req, res, next) {
        if (req.secure) {
                // request was via https, so do no special handling
                next();
        } else {
                // request was via http, so redirect to https
                res.redirect('https://' + req.headers.host + req.url);
        }
});

app.use(serveStatic(path.join(__dirname, 'views')))
app.listen(3000)
