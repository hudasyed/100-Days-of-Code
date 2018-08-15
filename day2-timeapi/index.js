var express = require('express');
var moment = require('moment-timezone');


var app = express();
var router = express.Router();

router.get('/', function(req, res){
    const timezone = req.query.timezone;
    let format = req.query.format;
    
    // error handling
    if(!timezone)
    {
        res.status(400).send('You have not defined a timezone');
    }
    if(!moment.tz.zone(timezone))
    {
        res.status(400).send('You have not defined a correct timezone');
    }

    if(!format)
    {
        format = 'hh:mm:ss'
    }
    const time = moment().tz(timezone).format(format);
    res.json(time);
});

app.use('/api', router);
app.listen(3000);
