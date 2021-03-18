var args = process.argv;
let a = 2;

console.log(args[2]);
console.log('a');
console.log('b');

if(args[2] === '1'){
    console.log('가');
}
 else {
    console.log('나');
}
console.log('c');

//nodejs 는 3번째 정보부터 입력값을 주도록 약속되어있다. (컴퓨터 프로그램은 숫자 카운팅을 0부터 하는 경우가 많다.)