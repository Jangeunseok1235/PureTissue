var a = function(){
    console.log('123123');
}
a();

/*
    함수를 위와 같이 선언 할 수도있다. 위와 같은 함수를 '익명함수'라 한다.
    익명함수는 이름이 없기에 호출 할 수 없다.
    - JavaSctipt에서는 함수가 '값'이다. 
*/
function slowfunc(callback){
    callback();
}
// 콜백 함수를 사용하면 특정 로직이 끝났을 때, 원하는 동작을 실행시킬 수 있다.

slowfunc(a);

// 'slowfunc'함수 사용시, "slowfunc(callback)"에서 'callback'이라는 파라미터는, 'slowfunc'함수가 사용될 때 적어진 '변수a' 가 가리키는 함수(익명함수)를 값으로 'callback'이 갖게된다. 그리고 'slowfunc'함수 안에서 'callback'이라는 함수를 호출하게 되면, '변수a'에서 가리키는 함수(익명함수)가 선언된다.