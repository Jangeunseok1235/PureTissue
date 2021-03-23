//refactoring : 코드를 간단하고 보기 좋게, 유지보수하기 쉽게...
//------------------------------------------------------------------------------------------
// 기초 선언
var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

//-----------------------------------------------------------------------------------------
//사용자가 입력한 정보, 외부에서 정보가 들어오고 나갈때 모두 오염될 수 있기에 철저히 의심해야한다.

// 모듈
var template = require('./lib/template.js');
//------------------------------------------------------------------------------------------


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
          var list = template.LIST(filelist); 
          var html = template.HTML(title, list,`<h2>${title}</h2>${description}`, 
            `<a href="/create">Create</a>`
          );
              response.writeHead(200);
              response.end(html);
          });

//----------------------------------------------------------------------------------
      } 
//----------------------------------------------------------------------------------
      else {
        fs.readdir('./data', function(error, filelist){
          var filterdId = path.parse(queryData.id).base;
        fs.readFile(`data/${filterdId}`, 'utf8', function(err,description){
          var title = queryData.id;
          var sanitizedTitle = sanitizeHtml(title);
          var sanitizedDescription = sanitizeHtml(description, {
            allowedTags:['h1']
            //allowedTags 는 허용할 태그들을 설정하는 것... 자세한건 sanitized-html을 검색하여 명령어를 더 찾아보길 추천한다.
            

            // + 현재 모듈의 디폴트 옵션이 allowedTags에 h1 ~ h6이 전부 들어있기 때문에 태그가 먹힘. 나중에 제한하고 싶으면 수정하면 될 듯 함
          });
          
            // 변수 이름은 최대한 관련 있는 것 끼리 묶고 변수 이름을 통해 코딩의 내용을 간략하게나마 파악하게끔 하는게 좋은듯
          var list = template.LIST(filelist);
          var html = template.HTML(sanitizedTitle, list,
           `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
           `<a href="/create">Create</a>
            <a href="/update?id=${sanitizedTitle}">update</a>
            <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizedTitle}">
              <input type="submit" value="delete">
            </form>
            ` 
          );
              response.writeHead(200);
              response.end(html);
        });
      }); 
      }
//----------------------------------------------------------------------------------
      
    } 
    else if (pathname === '/create') {
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - Create';
        var list = template.LIST(filelist); 
        var html = template.HTML(title, list,`
          <form action="/create_process" method="POST">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
              <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
              <input type="submit">
          </p>
          </form>
        `, '');
            response.writeHead(200);
            response.end(html);
        });

    }
    else if (pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;

        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end();
        })
      });


    }
    else if(pathname === '/update'){
      fs.readdir('./data', function(error, filelist){
        var filterdId = path.parse(queryData.id).base;
        fs.readFile(`data/${filterdId}`, 'utf8', function(err,description){
          var title = queryData.id;
          var list = template.LIST(filelist);
          var html = template.HTML(title, list,
            `
            <form action="/update_process" method="POST">
            <input type="hidden" name="id" value=${title}>
            <p><input type="text" name="title" placeholder="title" value=
            ${title}></p>
            <p>
                <textarea name="description" placeholder="description">${description}</textarea>
            </p>
            <p>
                <input type="submit">
            </p>
            </form>
          `,
           `<a href="/create">Create</a> <a href="/update?id=${title}">update</a>` 
          );
              response.writeHead(200);
              response.end(html);
        });
      }); 
    }
    else if(pathname === '/update_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id
        var title = post.title;
        var description = post.description;
        var filterdId = path.parse(id).base;
        fs.rename(`data/${filterdId}`, `data/${title}`, function(error){
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end();
          })
        });

      });
    }
    else if(pathname === '/delete_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id
        fs.unlink(`data/${id}`, function(error){
          response.writeHead(302, {Location: `/`});
          response.end();
        });

      });
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