var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200);
  response.write('Yayy.. I am learning node');
  setTimeout(function(){
    response.write('yayy.. keep going');
    response.end();
  }, 5000);
}).listen(8080);
console.log('Listen on port 8080...');
