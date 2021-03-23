var M = {
    v:'v',
    f:function(){
      console.log(this.v);
    }
  }
   
  module.exports = M;
  //모듈이 담겨있는 Mpart.js라는 파일의 여러기능들 중에서 M이 가리키는 객체를 모듈 밖에서 사용할 수 있도록한다.