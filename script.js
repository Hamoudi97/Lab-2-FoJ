let number = 5; // If-else condition
if (number > 0) {
    console.log("This number is positive.");
} else if (number < 0) {
    console.log("This number is negative.");
} else {
    console.log("This number is equal to zero.");
}

let day = 6;

switch (day) {   //switch statement.
    case 1:
        console.log('Sunday');
        break;
    case 2:
        console.log('Monday');
        break;
    case 3:
        console.log('Tuesday');
        break
    case 4:
        console.log('Wednesday');
        break;
    case 5:
        console.log('Thursday');
        break;
    case 6:
        console.log('Friday');
        break;
    case 7:
        console.log('Saturday');
        break;
    default:
        console.log("I don't know what day it is today.");
}

console.log("For Loops.");


for (let i = 1; i <= 5; i++) { //For Loops.
    console.log(i);
}

console.log("While Loops.");
let i = 1
while (i <= 5) {  //While Loops.
    console.log(i);
    i++;
}

console.log("Do...While Loops.");
let j = 1;

do { //Do...While Loops.
    console.log(j);
    j++;
} while (j <= 5)

console.log('Break Statements.');


for (let i = -2; i <= 10; i++) {  //Break Statement.
    if (i === 3) {
        break;
    }
    console.log(i);
}

console.log('Continue Statements.');


for (let i = 1; i <= 10; i++) { //Continue Statement.
    if (i === 3) {
        continue;
    }
    console.log(i);
}

console.log("Scope and Context.");


let globalVar = "I'm Global!";

function scopeExample() {
    let localVar = "I'm local!"
    console.log(globalVar);
    console.log(localVar);
}

scopeExample()
console.log(globalVar);
//console.log(localVar); won't work as localVar is not defined outside the function.


