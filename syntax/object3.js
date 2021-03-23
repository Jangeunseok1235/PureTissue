var q = {
    v1:'v1',
    v2:'v2',
    f1:function (){
      console.log(this.v1);
    },
    f2:function(){
      console.log(this.v2);
    }
    // this : 함수와 같은 함수가 객체 안에서 사용될 때 자신이 속해있는 객체를 참조 할 수 있게끔 하는 약속
  }
   
  q.f1();
  q.f2();