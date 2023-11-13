//Build Objecs

var ourDog = {
    "name": "Montu",
    "legs": "4",
    "tails": "1",
    "friends": ["Everything"],
    "the colour": "White & Black Mix",
    "the breed": "Ghumantu"
};

console.log(ourDog.name);    //Accessing Object Properties with dot notation
console.log(ourDog.friends);

console.log(ourDog["the colour"]); //Accesing Object Properties with bracket notation
console.log(ourDog["the breed"]);  //Bracket notation is essential where properties are wrtten with gap

var testObj = {
    18: "Virat",
    10: "Tendulkar",
    8: "Jadeja"
}; 

var playerNumber = 8;        //Accessing Object Properties with variables
var player = testObj[playerNumber]; 
console.log(player);


//Updating Object Properties
var ourDog = {
    "name": "Montu",
    "legs": 4
};

ourDog.name = "Happy Montu";
console.log(ourDog.name);

//Adding new Properties
var myDog = {
    "name": "Micky",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything"]
};
myDog.bark = "bow-wow"; //Add new properties
myDog.run = "fast"; 

delete myDog.name; 
console.log(myDog);

//Using Objects for lookups
function phoneticLookup(val) {
   var result = "";

   var lookup = {
    "virat": "kohli",
    "suresh": "raina",
    "yuvraj": "singh",
    "hardik": "pandya"
};
result = lookup[val];
return result;
}
console.log(phoneticLookup("suresh"));


//Testing Objects for Properties
var myObjects = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}; 

function checkObjects(checkProp) {
    if(myObjects.hasOwnProperty(checkProp)) {
        return myObjects[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObjects("gift"));

//Accessing Nested Objects
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = undefined;
console.log(myStorage.car.inside["glove box"]);

//Accessing Nested Arrays
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var tree = myPlants[1].list[1];
console.log(tree);



function randomFraction() {
    return Math.random();
}
console.log(randomFraction());


function convertToInteger(str) {
    return parseInt(str);
}
console.log(convertToInteger("90"));

//Prevent Object Mutation
function freezeObj() {
    const MATH_CONSTANTS = {
        PI : 3.14 
    };
    
    Object.freeze(MATH_CONSTANTS);  //Value of PI is not change because it freeze the value 

    try {
        MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

//Anonymous Function
/*var magic = function() {
    return new Date();
};
*/
/*
var magic = () => {
    return new Date();
};
*/

//Arrow function with paremeters
/*
var myConcat = function(arr1,arr2) {
    return arr1.concat(arr2);
} 
console.log(myConcat([1, 2], [3, 4, 5]));
*/
/*
var myConcat = (arr1, arr2)  => {
   return arr1.concat(arr2);
} 
console.log(myConcat([1, 2], [3, 4, 5]));
*/

//Higher Order Function










