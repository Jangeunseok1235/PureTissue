var member = ['Mr.A', 'Ms.B', 'Jr.C'];
console.log(member[1]); // Ms.B

var i = 0;
while(i < member.length){
    console.log('arry loop :', member[i]);
    i = 1 + i;
}

var roles = {
    'alpha' : 'korean',
    'beta' : 'american',
    'gamma' : 'english',
    'key' : 'value'
};
/*
    배열은 데이터를 순서대로 입력하면 되지만, 객체는 각각의 데이터마다 고유한 이름을 주는 것.
    함수 선언과 비슷한 느낌이 남
*/

console.log(roles.alpha); 
/*
    1번째. 객체 불러오는 방법 = 선언한 객체명(key).데이터의 고유이름(value)
    2번째. 객체 불러오는 방법 = 선언한 객체명(key)['데이터의 고유이름(value)']
*/


for(var name in roles){
    console.log('object => ', name, '/ value => ', roles[name]);
}
/*
    for(변수 in 객체)
    for문을 쓸때 첫번째 in 앞에 있는 변수에는 객체의 식별자(key)가 들어오도록 약속되어있다.
    
*/
