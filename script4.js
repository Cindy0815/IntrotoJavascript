/*
Create function that takes in one argument that 
is passed through a conditional statement. Return 
the result as an alert or console.log. Test all of 
your conditions to make sure you can receive all of 
your results back
*/

function gradeLevel(year){
	if (year == 1){
		return "Freshman"
	}
	else if (year == 2){
		return "Sophomore"
	}
	else if (year == 3){
		return "Junior"
	}
	else if (year == 4){
		return "Senior"
	}
	else{
		return "This can only read 4 years of HS/college grade levels"
	}
}

console.log(gradeLevel(1));
console.log(gradeLevel(2));
console.log(gradeLevel(3));
console.log(gradeLevel(4));
console.log(gradeLevel(5));
