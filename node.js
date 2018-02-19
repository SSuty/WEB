// load library:
var exp = require('express');
var app = exp();

app.listen(3000);

app.use('/', exp.static('Main'));
