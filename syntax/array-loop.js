var number = [88, 400, 12, 34, 22, 2, 546];

var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`);