var f = function(){
    console.log(1+55);
    console.log(1+33);
  }
  var a = [f];
  a[0]();
   
  var o = {
    func:f
  }
  o.func();

  /*
    함수는 '값'으로 사용될 수 있지만 반복문, 조건문 경우 사용 될 수 없다.
    따라서 배열과 객체는 모두 연관된 데이터를 담는 그릇인데 자바 스크립트에서는 처리방법을 그룹핑하는 함수 조차도 데이터이기도 하기때문에 배열과 객체에도 담을 수 있다.
  */
