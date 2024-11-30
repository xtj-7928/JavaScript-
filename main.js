/*
console. log("hello".length); //显示"hello"这个字符串的长度

console. log("hello".charAt(0)); //显示"hello"这个字符串的第零个（即平时计数的第一个）字符

console. log("hello, world" .replace("hello", "goodbye")); //用"goodbye"代替"hello"并输出

console. log("hello, world".toUpperCase()); //将打出的字符串全部变为大写
*/
/*
var name = "DasAuto"; //定义一个变量，名称叫"name"
console.log(name); //输出"name"这个变量

let a = 1;
console.log(a);
*/
/*
const Pi = 3.14; //定义一个常量
console.log(Pi);
*/
/*
var x;
x = "3" + 4 + 5; // x = "3" + "4" + "5"
console.log(x);
*/
//if...else控制结构


/*
var name = "Daniel";
var age = 20;

if (name == "Simon")
{
	console.log("Simon");
}

else if (name == "John")
{
	console.log("John");
}
else 
{
	console.log("Stranger");
}
*/

function sequence() {
	let a = 2;
	let b = 20;
	let i = a;
	while( i <= b )
	{
		console.log(i);
		i + 2;
	}
}
sequence();