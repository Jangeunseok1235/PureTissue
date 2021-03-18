var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title, list, body){
    return `
    <!doctype html>
    <html>
    <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
    <body>
    <h1><a href="index.html">WEB</a></h1>
    ${list}
    ${body}
    </body>
    </html>
  
  `;
}
function templateList(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
}

    var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    

    if(pathname === '/'){

      if(queryData.id === undefined){
//----------------------------------------------------------------------------------
         fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, node.js';
          var list = templateList(filelist); 
          var template = templateHTML(title, list,`<h2>${title}</h2>${description}`);
              response.writeHead(200);
              response.end(template);
          })

//----------------------------------------------------------------------------------
      } 
//----------------------------------------------------------------------------------
      else {
        fs.readdir('./data', function(error, filelist){
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err,description){
          var title = queryData.id;
          var list = templateList(filelist);
          var template = templateHTML(title, list,`<h2>${title}</h2>${description}`);
              response.writeHead(200);
              response.end(template);
        });
      }); 
      }
//----------------------------------------------------------------------------------
      
    } 

    else {
      response.writeHead(404);
      response.end('Not found');
    }

    //루트 : 주소뒤에 패스정보가 붙지 않는 현재 상태 ex) localhost:3000
    // cmd 주소 지정방식과 다르게, \(역슬래쉬) 대신 / (슬래쉬)를 사용한다
    // writeHead 에서웹페이지를 찾을 수 없을때엔, 404 라는 약속된 번호를 반환한다.
    
    
 
});
app.listen(3000);