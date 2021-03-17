var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    if(_url == '/'){
      title = 'Welcome : 어서오십시오.';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);

    // cmd 주소 지정방식과 다르게, \(역슬래쉬) 대신 / (슬래쉬)를 사용한다
    fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
      var template = `
    <!doctype html>
<html>
<head>
  <title>WEB1 - ${title}</title>
  <meta charset="utf-8">
</head>
<body>
  <h1><a href="index.html">WEB</a></h1>
  <ol>
     <li><a href="/?id=HTML">HTML</a></li>
     <li><a href="/?id=CSS">CSS</a></li>
     <li><a href="/?id=JavaScript">JavaScript</a></li>
  </ol>
  <h2>${title}</h2>
  <p>${description}
  </p>
</body>
</html>

    `;
    response.end(template);
    })
    
 
});
app.listen(3000);