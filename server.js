//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.get('/*all', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);