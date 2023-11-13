//in line comment


/* this is a 
multiline comment*/ 

/*Data types
undefined, null, boolean, string, symbol, number, and object
*/
var myName = "Shashank"
myName = 7;

let ourName = "Bholu"

const pi = 3.14    //never change

var a;  //declaring
console.log(a);
var b = 2; //declaring & assigning
a = 7;
b = a;
console.log(a)


var sum = 10 + 10;
console.log(sum);

var difference = 10 - 5;
console.log(difference);

var product = 8 * 10;
console.log(product);

var quotient = 66 / 33;
console.log(quotient);

var myVar = 87;
myVar = myVar + 1;
myVar++;
console.log(myVar);

var  ourDecimal = 5.7;
var myDecimal = 0.009;

var product = 2.0 * 2.5;
console.log(product);

var quotient = 4.4 / 2.2;
console.log(quotient);

var remainder;
remainder = 11 % 3;
console.log(remainder); 

var firstName = "Shashank";
var lastName = "Yadav";
console.log(firstName +  lastName);

//Escape characters
var myStr ="I am a \"double quoted\" string inside \"double quotes\"";
console.log(myStr);
//others methods to use single quotes inside double quotes & vice versa

var myName = "Shashank";
var myStr = "My name is " + myName + " and I am well";
console.log(myStr);


var firstLetterofFirstNamr = "";
var firstName = "Shashank";
firstLetterofFirstNamr = firstName[0];
console.log(firstLetterofFirstNamr);

var firstLetterofLastName = "";
var lastName = "Yadav";
firstLetterofLastName = lastName[0]; 
console.log(firstLetterofLastName); 

//STRINGS ARE IMMUTANLE(Cannot be change once created i.e individual characters of a string literal cannot be changed)
var myStr = "Jello World";
myStr[0] = "H";  //individual characters are not changed
console.log(myStr);
myStr = "Hello World";
console.log(myStr);

var ourArray = ["Shashank", 27];
var myArray = [["Bulls", 23], ["White", 45]];

var ourArray =[50, 60, 70]
console.log(ourArray[0]);

ourArray[1] = 7;
console.log(ourArray);   

var myArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12],13,14];
console.log(myArray[1][2]);

var ourArray = ["David" , "J", "cat"];
ourArray.push("happy", "joy");
console.log(ourArray);
ourArray.pop();
console.log(ourArray);
ourArray.shift();
console.log(ourArray);
ourArray.unshift("Smith");
console.log(ourArray);
