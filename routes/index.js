var express = require('express');
var router = express.Router();
var useragent = require('useragent');
/* GET home page. */
router.get('/api/whoami', function(req, res, next) {
    
    function language (str){
        var sol= str.split(",");
        return sol[0];
    }
        function os (str){
        var sol= str.split(" ");
        return sol[1];
    }
    
    var ip = req.headers['x-forwarded-for'];
    var langStr = req.headers['accept-language'];
    var lang= language(langStr);
    var os = useragent.parse(req.headers['user-agent']).os.toString();
    
  console.log(os);
  var data = {ipaddress: ip,
              language: lang,
              software: os};
  res.json(data);
});

router.get('/', function(req, res, next) {
  

  res.render("index");
});

module.exports = router;
