var http = require('http');
var fs = require('fs');

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type' :  'text/html'});
    var url = req.url;
    if(url == '/') {
        fs.readFile('./Screens/index.html', function (error, data) {
            if (error == null) {
                res.write(data);
                res.end();
            } else {
                res.end(error);
            }
        });
    }else if(url == 'test2'){
        fs.readFile('./Screens/register.html',function (error,data){
            if (error == null) {
                res.write(data);
                res.end();
            } else {
                res.end(error);
            }
        });
    }
}).listen(process.env.PORT || '3333');
