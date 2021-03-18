console.log(Math.round(1.6));
console.log(Math.round(1.3));

/*- 개체 : 함수를 관리하는 폴더 같은 개념 Ex) Math 
    round 라는 함수는 반올림을 하는 함수다.
*/

function sum(first, second){
    // parameter (매개변수) : 실행될 함수(부프로그램)에게 값을 전달하게끔 하는 변수
    console.log('가');
    return first+second;
    // return 은 함수의 실행을 멈추고 그 즉시 return 뒤에 따라오는 값을 출력하면서, 선언된 함수에 반환한다.
    console.log('나');
}
console.log(sum(2,4)); // argument (인자)