var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/ping', async(req,res) => {
  return res.status(200).json({
    status: "success",
    messsage: "PING!!!"
  })
});
module.exports = router;
