var http = require('http');
var url = require('url');
var request = require('request');

http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "application/json"});
    
	//split params
    var parts = url.parse(req.url, true);
  	var query = parts.query;
    
    var u;
    var r;
    var s

    if('url' in query) {
    	u = query.url;
    }

    if('request' in query) {
    	r = query.request;  	

    	var reqArr = r.split(",");
    }

    if('script' in query) {
    	s = query.script;
    }
    
    var sttCode = res.statusCode;
	var obj;

    if(sttCode == 200) {
    	obj = {
    		success : true,
  			message : 'OK',
  			data : {}
    	}

    	if(reqArr) {
    		reqArr.forEach(async function(element) {
    			if(element == 'header') {
    				obj.data[""+element] = req.headers;
    			}
		    	
		    	if(element == 'cookie') {
					obj.data[""+element] = (req.headers.cookie) ? req.headers.cookie : '';
    			}

    			if(element == 'html') {
    				getHtml(u, function(body) {
    					console.log(body);
    				})
    				obj.data[""+element] = x + "a";
    			}

			});
    	}   	
    }
    else obj = {
    	success : false,
  		message : 'Không thể khởi động selenium/phantomjs/puppetee'
    }
    
  	var json = JSON.stringify(obj);

  	res.end(json);
}).listen(8080);

function getHtml(url, cb) {
	request("" + url,function(err, res, body) {
  		if(err) {
  			
  		}
  		cb(body);
  	}); 
}

