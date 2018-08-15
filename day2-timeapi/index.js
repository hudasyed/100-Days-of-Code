var express = require('express');
var moment = require('moment-timezone');


var app = express();
var router = express.Router();

router.get('/', function(req, res){
    res.json(moment().tz(req.query.timezone).format('h:m:s'));
});

app.use('/api', router);
app.listen(3000);
