var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// CORS
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// const api_version = `/newchoke/api/${appVersion}`;
app.use(serveStatic(__dirname + "/dist"));
app.use(require('./api/portal/api_portal'));
//app.use(require('./api/portal/api_app'));

var port = process.env.PORT || 8081;
console.log('Server Runing PORT : ' + port);
app.listen(port);