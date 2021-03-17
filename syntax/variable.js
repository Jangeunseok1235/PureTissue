{
var a = 2;
console.log(a);
// var은 중복 선언이 가능하다

var a = 10;
console.log(a);
// var 두번째 선언+초기화

var a;
// var 세번째 선언(초기화X) , 단 초기화 없이 선언만 한 경우 선언문 자체가 무시된다.
}
let b = 3;
console.log(b);
// let은 중복선언이 불가능하다.
// let은 var과 같이 값의 재할당이 가능한 변수다.

const c = 4;
console.log(c);
// const는 중복선언이 불가능하다.
// const는 값의 재할당이 불가능한 변수다. ex) const a = 1; a=33; (X 안됨)
// const는 처음 선언할 때 반드시 초기화(값 할당)를 해주어야 한다.