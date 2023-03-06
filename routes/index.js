const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  console.log(req.originalUrl);
  res.send("<h1>Wrong !</h1>")
});

module.exports = router;
