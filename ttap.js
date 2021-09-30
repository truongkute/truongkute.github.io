function age(yearborn) {
	var time = new Date();
	var year = time.getFullYear();
	return year-yearborn;
}

var code = prompt("Enter your code:");
var name = prompt("Enter your name");
var yearborn = prompt("Enter your year born");
var age;
age = age(yearborn)
console.log(age);


