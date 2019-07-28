let express = require('express');
let router = express.Router();

router.get('/info/:id', (req, res, next) => {
	return app.render(req, res, "/user/info", { id: req.params.id });
});

module.exports = router;
