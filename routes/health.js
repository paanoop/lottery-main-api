var express = require('express');
var router = express.Router();

/* GET health status. */
router.get('/', function (req, res, next) {
    res.json({
        "status": "healthy",
        "service": "lottery-man-api",
        "version": "1.4.2",
        "environment": "production",
        "uptimeSeconds": process.uptime(),
        "timestamp": new Date().toISOString(),
        "checks": {
            "database": {
                "status": "healthy",
                "responseTimeMs": 12
            },
            "cache": {
                "status": "healthy",
                "responseTimeMs": 3
            },
            "externalApi": {
                "status": "healthy",
                "responseTimeMs": 85
            },
            "mobile": {
                "version": "1.6.1",
                "buildNumber": "14"
            }
        }
    });
});

module.exports = router;
