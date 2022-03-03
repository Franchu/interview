var express = require('express');
var router = express.Router();
const DbService = require('../services/db');
const Analytics = require('../services/analytics');
const dbService = new DbService();
const analyticsService = new Analytics();

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/status', function (req, res) {
	const data = req.body;

	try {
		dbService.save(data);
		analyticsService.send(data);
		res.status(200).send('Todo ok');
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
