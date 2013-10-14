var express = require('express');
var app = express();
app.use(express.bodyParser());
app.use(express.static(__dirname + '/presentation'));
app.listen(3000);
console.log('Listening on port 3000...');