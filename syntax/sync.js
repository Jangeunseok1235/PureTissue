var fs = require('fs');

/*
console.log('a');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('c');

Sync 가 있으면 동기적인 것이고 Sync가 없으면 비동기 적인 것이다.
*/

console.log('a');
var result = fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('c');

/* 
    nodejs는 비동기를 선호한다.
    readFileSync는 return 값을 주는데, readFile 은 return값을 주지 않는다.
    따라서, 함수를 3번째 인자로 주어야한다.
    -----------------------------------------------------------------
    readFile 은 파일을 읽는 작업 (현 구문 'syntax/saple.txt') 3번째 인자로 준 함수를 nodejs가 실행시키면서 첫 번째 인자(현 구문 err) 에는 에러가 있다면 에러를 인자로 제공하고, 두 번째 파라미터는 파일의 내용을 인자로서 공급해주도록 약속 되어있다.
    -----------------------------------------------------------------
    위 코드의 실행 결과는 A, C, B로 나온다.
    이유는 12번째 줄이 실행되고 13번째 줄이 동작을 하고 13번째 줄이 처리가 완료되기전에 16번째 줄이 실행되고, 13번째 줄은 13번째 대로 동작하다가 동작이 끝나자마자 readFile에 세 번째 인자로 있는 함수 호출되면서, 함수 안에 있는 코드가 나중에 실행 되어 위와 같은 값이 나오게 됨

    따라서 비동기적인 방식은 병렬적이라 동시에 여러코드를 처리 할 수 있고, 동기적인 방식은 직렬적인 방식이라 순서대로 코드를 처리 할 수 밖에 없어서 nodejs에선 선호하지 않는 듯 하다.

    + 비동기 처리가 필요한 이유중 한가지는, 주어진 요청을 동기적으로 처리하면 들어가는 리소스가 많아지기 때문이다.
*/