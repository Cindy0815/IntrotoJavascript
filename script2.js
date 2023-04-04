/*
	Create a conditional statement that compares two numbers. 
	You can choose if those numbers will be equal, less than, 
	greater than, less than or equal to, or greater than or equal to 
	each other. Include an if, else if, and else 
	statement. Create an alert that gives your user 
	feedback based on the number. Test your statement 
	with different numbers to make sure all alerts work.
*/

let num1 = 50;
let num2 = 10;

if (num1 > num2){
	alert(num1 + " is greater than " + num2)
	console.log(num1 + " is greater than " + num2)
} else if (num1 < num2){
	alert(num1 + " is less than " + num2)
	console.log(num1 + " is less than " + num2)
} else{
	alert(num1 + " is equal to " + num2)
	console.log(num1 + " is equal to " + num2)
}