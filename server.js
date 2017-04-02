let express = require('express');
let path = require('path');
let serveStatic = require('serve-static');
 
let app = express();

// HTTPS redir code - originally (c) 2014 IBM Corp. 
// Modified redir code - (c) 2017 motiontheking
app.enable('trust proxy');
app.use (function (req, res, next) {
        if (req.secure)
              next(); // request was via https, so do no special handling
        else        
              res.redirect(`https://${req.headers.host}${req.url}`); // request was via http, so redirect to https
});

app.use(serveStatic(path.join(__dirname, 'views')));
app.listen(3000);
