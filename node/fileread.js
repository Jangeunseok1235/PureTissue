var fs = require('fs');
fs.readFile('sample.txt', 'utf8', function(err, data){
  console.log(data);
});

// cmd 상위 디렉토리로 돌아가는 명령어 " cd .. "