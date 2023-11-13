function ourReusableFunction() {
    console.log("Heyya, World");
}
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();
ourReusableFunction();


function sum(a, b) {
    console.log(a + b);
}
sum(10, 10);
console.log(sum);


//Scope refers to the visibility of variables
//Variables which are defined outside the function block have global scope
//Variable which are declared within a function as well as the function parameters have the local scope
//that means they can  only visible within the function

function myLocalScope() {
    var myVar = 5
    console.log(myVar);
}
myLocalScope();
//console.log(myVar); //it shows error because myVar is local cannot use outside the function 

//if global variable and local variable same than local varible is takes precedence(priority)
var outerWear = "T-Shirt";
function myOutfit() {
    var outerWear = "sweater";
    return outerWear;
}
console.log(myOutfit()); //local varible > global variable
console.log(outerWear);  //variable outerWear of function have local scope that's why global variable prints

function minusSeven(num) {
    return num - 7;
}
console.log(minusSeven(10));

function timesFive(num) {
    return num * 5;
}
console.log(timesFive(5));

function nextInLine(arr, item) {
       arr.push(item);
       return arr.shift();   
}

var testArr = [1, 2, 3, 4, 5];
console.log("Before" + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After" + JSON.stringify(testArr));

