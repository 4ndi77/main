//Var
var a=10;
var b=20;
var c=a+b;
console.log(c);

var d=10;
var e=4;
var f=d%e;
console.log(f);

var g=99;
g++;
console.log(g);

var h=101;
h--;
console.log(h);

var i=20;
var j=3;
var k=i**j;
console.log(k);

var x=15;
x +=5;
console.log(x);

var l=100;
var m=10;
console.log(l != m)

var n=1234;
var o="1234";
console.log(n === o);

var var1=20;
console.log(var1 >= 18 && var1 <=50)

var var2=4;
var var3=6;
console.log(var2 == 4 || var3 == 4);

var var4=9;
var var5=10;
console.log(!(var4==var5));


//Function
function showMessage(){
    alert("Klasa ma e mira");
}
showMessage();

function sum(numb1, numb2){
    return numb1 - numb2;
}

console.log(sum(22,2));

//Constructor
function Computer(name, CPU, RAM){
    this.name=name;
    this.CPU=CPU;
    this.RAM=RAM;
}
var computer1=new Computer("Macbook", "Mi 8-core", "8GB")
var computer2=new Computer("Lenovo", "Mi 8-core", "16GB")
var computer3=new Computer("Dell", "Mi 12-core", "8GB")

console.log(computer1);
console.log(computer2);
console.log(computer3);