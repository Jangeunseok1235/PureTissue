var testFolder = './data';
var fs = require('fs');
// " ./ " 는 현재 디렉토리 라는 뜻, 또한 readdir 은 현재 명령문이 위치한 자리를 기준으로 한다.
// ex) cmd 에서, D:\nodejs> 란 위치에 있으면, nodejs 를 기준으로 한다.
fs.readdir(testFolder, function(error, filelist){
    console.log(filelist);
});