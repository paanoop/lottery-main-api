var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET lottery results. */
router.get('/result_prety_list_api2.php', function (req, res, next) {
    var filePath = path.join(__dirname, '..', 'lr-sample-data.json');

    fs.readFile(filePath, 'utf8', function (err, data) {
        if (err) {
            return next(err);
        }
        try {
            var jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseErr) {
            next(parseErr);
        }
    });
});

module.exports = router;
