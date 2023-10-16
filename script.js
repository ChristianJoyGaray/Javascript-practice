var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr);
// \n is for next line, \t indent, \\just for one backslash "\"

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var lastName="Garay"
var lastLetterofLastName=lastName[lastName.length -1];
//OR
var lastLetterofLastName=lastName[4];
//Console result: y
console.log(lastLetterofLastName)

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";

    result+= "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";

    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"))

 function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
    var result="";

    result+= "The " + myAdjective + " " + myNoun + " " + myVerb + " in the store " + myAdverb + ".";

    return result;
}

console.log(wordBlanks("pussy","juicy","got cream pied","professionally"))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[3][0][2];

console.log(myData)

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myArrays = ["garay", "christian"]
myArrays.push(["joy", "dizon"])

console.log(myArrays)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myArrays2 = ["garay", "christian"]
myArrays2.push("joy", "dizon")

console.log(myArrays2)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myArrays3 = [["garay", "christian"]]
myArrays3.push(["joy", "dizon"])

console.log(myArrays3)

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray=[1,2,3]
var removeFromOurArray= ourArray.pop()

console.log(removeFromOurArray)
console.log(ourArray)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//CHATGPT

var ourArray = [1, 2, 3];
var removeFromOurArray = ourArray.shift();

console.log(removeFromOurArray); // Outputs: 1
console.log(ourArray); // Outputs: [2, 3]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray = ["fucker", "sucker", "nickher"];
var indexToRemove = ourArray.indexOf("sucker"); // Find the index of the element to remove

    if (indexToRemove !== -1) { // Check if the element was found
    ourArray.splice(indexToRemove, 1); // Remove the element at the specified index
}

console.log(ourArray);
//OUTPUT: ['fucker', 'nickher']

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArrayfuck = ["fucker1", "sucker2", "nickher3"];
ourArrayfuck.splice(1,1); // Remove the element at the specified index
//(1,1), 1st 1 is index or the place of the sucker2, 2nd 1 is the number of elements to be removed

console.log(ourArrayfuck);
//OUTPUT: ['fucker1', 'nickher3']
//CHATGPT

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function reusableFunction(){
    console.log("fucking nigg")
}

reusableFunction();
reusableFunction();
reusableFunction();
reusableFunction();
reusableFunction();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function functionArguments(a, b){
    console.log(a+b);
}

functionArguments(5, 8);
functionArguments(6, 9);
functionArguments(7, 10);
functionArguments(8, 11);
functionArguments(9, 12);

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function timesFive(num){
    return num * 5;
}

console.log(timesFive(400));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var changed=0;

function change(num){
    return (num + 200) / 15;
}

changed = change(7);

console.log(changed)

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function nextInLine(arr, item){
    arr.push(item);
    return arr.shift(); //REMOVES 1 in the array
}

function nextInLine2(arr, item2){
    arr.push(item2);
    return item2;
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //CALLED testArr first
console.log(nextInLine(testArr, 6));               //THEN CALLED FUNCTION nextInLine
console.log("After: " + JSON.stringify(testArr));  //CALLED THE NEW testArr with 6
console.log(nextInLine2(testArr, 100));            //TEST THE ORDER OF CONSOLE.LOGS
console.log("Continue fucker: " + JSON.stringify(testArr));    //IT WORKDS

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myArrayUnshift = [2, 3, 4];
const newValueUnshift = "tangina";

myArrayUnshift.unshift(newValueUnshift);
console.log(myArrayUnshift);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const myArraySplice = [1, 2, 3, 4, 5, 6];
const newValueSplice = 99;
const positionSplice = 2; // Index 2 corresponds to the 3rd position

myArraySplice.splice(positionSplice, 0, newValueSplice); //if 0 is removed then OUTPUT: [1, 2]

console.log(myArraySplice); // Output: [1, 2, 99, 3, 4, 5, 6]

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function trueOrFalse(totooBaGago){
    if (totooBaGago){
        return "oo pre totoo yon, bat di kaba naniniwala sakin?"
    }
    return "hindi totoo yon pre, bat di kaba naniniwala sakin?"
}

console.log(trueOrFalse(false));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testEqual(val){
    if (val === 10){
        return "equal siya pre." //== means equal value, === means equal value and equal data type.
    }
    return "hindi siya equal tanga."
}

console.log(testEqual("10"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function compareEquality(a, b){
    if (a == b){
        return "yes mhie same same."
    }
    return "We are not the same, niggeR."
}

console.log(compareEquality(10, "10"));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testNotEqual(val){
    if (val !== 10){  // != meaning "NOT" "EQUAL"
        return "hindi equal konoyaro"
    }
    return "equal sila daisuki <3"
}

console.log(testNotEqual("10"));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testGreaterThan(val){
    if (val >= 100){
        return "100 or more"
    }

    if (val > 10){
        return "over 10"
    }

    return "10 or under"
}

console.log(testGreaterThan(10));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testLogicalAnd(val){
    if (val <= 50 && val >= 20){  //&& meaning AND
        return "Yes niggas"
    }
    return "No niggas"
}

console.log(testLogicalAnd(30));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testLogicalOr(val){
    if (val < 10 || val > 20){ //|| meaning OR
        return "Outside"
    }

    return "Inside"
}

console.log(testLogicalOr(50))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testElse(val){
    var result = "";

    if (val > 5){
        result = "Bigger than 5"
    }

    else{
        result = "5 or smaller"
    }

    return result;
}

console.log(testElse(5));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testElseIf(val){
    if (val > 10){
        return "Greater than 10"
    } else if (val < 5){
        return "Smaller than 5"    //Don't know why else if is necessary. If else is removed, it is still the same.
    } else{
        return "Between 5 and 10"
    }
}

console.log(testElseIf(6));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testElseIfOrder(val){
    if (val < 5){
        return "Smaller than 5";
    } else if (val < 10){
        return "Smaller than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(testElseIfOrder(4));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function testElseIfChallenge(num){
    if (num < 5){
        return "Tiny"
    } else if (num < 10){
        return "Small"
    } else if (num < 15){
        return "Medium"
    } else if (num < 20){
        return "Large"
    } else{
        return "Greater than or equal to 20"
    }
}

console.log(testElseIfChallenge(25));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home"];
function golfScore(par, stroke){
    if (stroke == 1){
        return names[0]
    } else if (stroke <= par - 2){
        return names[1]
    } else if (stroke == par - 1){
        return names[2]
    } else if (stroke == par){
        return names[3]
    } else if (stroke == par + 1){
        return names[4]
    } else if (stroke == par + 2){
        return names[5]
    } else if (stroke >= par + 3){
        return names[6]
    }
}

console.log(golfScore(1, 3))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function caseInSwitch(val){
    var answer = ""
    switch(val){
        case "nigga": 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    return answer;
}

console.log(caseInSwitch("nigga"))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function caseInSwitch(val){
    var answer = ""
    switch(val){
        case "nigga": 
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "stuff"
            break;
    }

    return answer;
}

console.log(caseInSwitch("fucker"))

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SequentialSizes(val){
    var answer = ""
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}

console.log(SequentialSizes(7));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function chainToSwitch(val){
    var answer = "";
    switch (val){
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much";
            break;
        case 7:
            answer = "Ate nine";
            break;
        default:
            answer = "STUFF";
            break;
    }
    
    /*if (val === "bob"){
        answer = "Marley";
    } else if (val === 42){
        answer = "The answer";
    } else if (val === 1){
        answer = "There is no #1";
    } else if (val === 99){
        answer = "Missed me by this much";
    } else if (val === 7){
        answer = "Ate nine";
    }*/
    return answer;
}

console.log(chainToSwitch("bob"));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function isLess(a, b){

    return a < b; //DO THIS

    /*if (a < b){ //INSTEAD OF THIS
        return true;
    } else{
        return false;
    }*/
}

console.log(isLess(5,15));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function abTest(a, b){
    if (a < 0 || b < 0){
        return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-4, 4));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var count = 0;

function cc(card){
    switch(card){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++; //++ means add 1
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--; //-- means minus 1
            break;
    }

    var holdbet = 'Hold'
    if (count > 0){
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}

cc(1);
cc(2);
cc(3);
cc(4);
cc(5);
cc(6);
cc(10);
cc("J");
cc("Q");
cc("K");
cc("A");

console.log(cc("K"))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourDog = {
    "name": "Chubby",
    "race": "shih tzu",    //FOR CREATING OBJECTS
    "color": "brown",
    "brothers": ["Wacky", "Shiro"]
}

var brothersValue = ourDog.brothers;

console.log(brothersValue);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

testObj.hat = "Fucker";  //UPDATING OBJECT PROPERTY. HAT IS NO LONGER BALLCAP, BUT IS NOW "FUCKER".

var hatValue = testObj.hat;           //ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
var shirtValue = testObj.shirt;
var shoesValue = testObj.shoes;

console.log(hatValue);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        //ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION.
                        //FOR PROPERTIES WITH SPACE " ".

var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink2": "water"
};

testObj2["an entree"] = "shit";  //UPDATING OBJECT PROPERTY. HAT IS NO LONGER HAMBURGER, BUT IS NOW "SHIT".

var entreeValue = testObj2["an entree"];
var sideValue = testObj2["my side"];
var drinkValue2 = testObj2['the drink2'];


console.log(entreeValue);
console.log(sideValue);
console.log(drinkValue2); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        //ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION.
                        
var testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

var playerNumber = 16;
var player = testObj3[playerNumber];

console.log(playerNumber, player);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

testObj2["an entree"] = "shit";  //UPDATING OBJECT PROPERTY. HAT IS NO LONGER HAMBURGER, BUT IS NOW "SHIT".
delete testObj2["the drink"];  //OUTPUT: UNDEFINED.

var entreeValue = testObj2["an entree"];
var sideValue = testObj2["my side"];
var drinkValue = testObj2['the drink'];


console.log(entreeValue);
console.log(sideValue);
console.log(drinkValue); //OUTPUT: UNDEFINED because of delete.

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                        //USING OBJECTS FOR LOOKUPS

function phoneticLookup(val){
    var result = " ";
    
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }


    /*switch(val){              //REPLACE SWITCH STATEMENT WITH OBJECTS FOR LOOKUPS INSTEAD OF SWITCH STATEMENTS.
        case "alpha":
            result = "Adams"
            break;
        case "bravo":
            result = "Boston"
            break;
        case "charlie":
            result = "Chicago"
            break;
        case "delta":
            result = "Denver"
            break;
        case "echo":
            result = "Easy"
            break;
        case "foxtrot":
            result: "Frank"
            break;
            
        }  */
        resultshit = lookup[val];
        return resultshit;
    }

    console.log(phoneticLookup("charlie"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                //TESTING OBJECTS FOR PROPERTIES.

var myObjForProp = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp){
    
    if (myObjForProp.hasOwnProperty(checkProp)){  //hasOwnProperty is a built-in method in JS. I did not create it.
        return myObjForProp[checkProp];
    } else {
        return "Not Found"
    }
}

console.log(checkObj("gift"));  //pony
console.log(checkObj("my little pony")); //NOT FOUND

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //MANIPULATING COMPLEX OBJECTS

var music = [{
    "artist": "Billy Joel",
    "title": " Piano Man",
    "release_year": 1973,
    "formats": ["CD", "8T", "LP"],
    "gold": true
},
{
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year":2003,
    "formats": ["Youtube video"]
}
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

var gloveBoxContents = myStorage.car.inside["glove box"];           //BOTH WORKS
var gloveBoxContents = myStorage["car"]["inside"]["glove box"];     //BOTH WORKS
console.log(gloveBoxContents);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myPlants = [
    {
        type: "flowers",
        list: ["rose", "tulip", "dandelion"],
    },
    {
        type: "trees",
        list: ["fir", "pine", "birch"]
    }
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //RECORD COLLECTION
            //STUDY

var collection = {
    "2548": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": ["Let it rock", "You give love a bad name"]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": ["1999", "Little red corvette"]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": [ ]
    },
    "5439": {
        "album": "ABBA Gold"
    }
};

var collectionCopy = JSON.parse(JSON.stringify(collection)); //JSON.parse is used to convert JSON strings into JavaScript objects, while JSON.stringify is used to convert JavaScript objects into JSON strings. 

function updateRecords(id, prop, value){
    if (value === ""){  // First, it checks if the value you want to set is an empty string.

        // If it is empty, it means you want to remove that piece of information.
        // So, it deletes that information from the book (collection) with the given id.
        delete collection[id][prop]; 
    } else if (prop === "tracks") {
        // If you want to update the "tracks" information of a book,
        // it makes sure there's an array to store tracks.
        collection[id][prop] = collection[id][prop] || [];
        // Then, it adds the new track (value) to the list of tracks for that book.
        collection[id][prop].push(value);
    } else {
        // If you're updating any other information (like the title or artist),
        // it simply sets that information to the new value.
        collection[id][prop] = value;
    }
    // Finally, it returns the updated collection (bookshelf) with the changes you requested.
    return collection;
}

console.log(updateRecords(5439, "tracks", "fucking niggas in paris"));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //ITERATE WITH WHILE LOOPS

var myArray210 = [];   //210 means 2hours and 10 mins in the youtube video https://www.youtube.com/watch?v=PkZNo7MFNFg&list=PLWKjhJtqVAbleDe3_ZA8h3AO2rXar-q2V

var i = 0;
while(i < 5){
    myArray210.push(i);
    i++;
}

var trial = myArray210[myArray210.length -3];

console.log(myArray210);
console.log(trial);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //ITERATE WITH FOR LOOPS

var ourArray212 = [];

for (var i = 0; i < 5; i++){
    ourArray212.push(i);
}

console.log(ourArray212);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var myArray212 = [];

for (var i = 1; i < 51; i++){
    myArray212.push(i);
}

console.log(myArray212);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //ITERATE ODD NUMBERS WITH A FOR LOOPS

var ourArray214 = [];

for(var i = 1; i < 51; i += 2){
    ourArray214.push(i);
}

var ourArray215 = [];
for(var i = 0; i < 51; i += 2){
    ourArray215.push(i);
}

console.log(ourArray214); //OUTPUT: ODD
console.log(ourArray215); //OUTPUT: EVEN

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray216 = [];

for(var i = 0; i >= -50; i -= 1){
    ourArray216.push(i);
}

console.log(ourArray216);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray217 = [];

for(var i = 10; i > 2; i -= 2){
    ourArray217.push(i);
}

console.log(ourArray217);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //ITERATE THROUGH AN ARRAY WITH A FOR LOOP
            //ADDING ALL VALUES IN THE ARRAY

var ourArray218 = [ 9, 10, 11, 12];
var ourTotal218 = 0;

for (var i = 0; i < ourArray218.length; i++){ //ourArray218.length is equal to 4. However, if something is added then the array would extend.
    ourTotal218 += ourArray218[i];  //ourTotal218 means ourTotal218 + ourTotal218 and something else. (Whatever is in the ourArray218).
}

console.log(ourTotal218);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ourArray219 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ourTotal219 = 0;

for (var i = 0; i < ourArray219.length; i++){
    ourTotal219 += ourArray219[i];    //sum of the array
}

console.log(ourTotal219);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //ADDING VALUES 11-20 TO THE ARRAY WITH VALUES 1-10 already.

var ourArray2192 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 11; i <= 20; i++){
    ourArray2192.push(i); 
}

console.log(ourArray2192);

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //NESTING FOR LOOPS

function multiplyAll(arr){
    var product = 1;

    for (var i = 0; i < arr.length; i++){        //select the 3 arrays
        for (var j = 0; j < arr[i].length; j++){   //select the inside of those 3 arrays ^^^^
            product *= arr[i][j];
        }
    }

    return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);  //product of all numbers in this array, OUTPUT: 5040

console.log(product);

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //ITERATE WITH DO...WHILE LOOPS

var myArray224 = [];
var i = 10;

do{   //do loops always runs the code
    myArray224.push(i); //pushes the i = 10 to the array.
    i+=2; //adds +2 to i.
   
}
while (i < 5); //while loop, checks the condition before running the code
//in this case, the do loop ran the code that added +2 to i which is now 12 but is stopped because of the while loop(while loop is the "condition" in this case.)
console.log(i,myArray224)

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //PROFILE LOOKUP

var contacts = [
    {
        "firstName":"Akira", //KEY VALUE PAIRS
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza","Coding","Brownie Points"]
    },
    {
        "firstName":"Harry",
        "lastName": "Potter",
        "number": "099437682",
        "likes": ["Hogwarts","Magic","Hagrid"]
    },
    {
        "firstName":"Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases","Violin"]
    },
    {
        "firstName":"Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascipt","Gaming","Foxes"]
    }
];

function lookUpProfile(name, prop){ //prop = property
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name || contacts[i].lastName === name){ //checks if the firstName or lastName is equal to the name, then it will do the if statement.
            return contacts[i][prop] || "shit"   //return the value of the property that was passed in.  
        }  // the || shit/ or shit gives an output of "shit" if the input is not in the contacts or is spelled incorrectly.
    }
    return "No such contact."
}
var data = lookUpProfile("Holmes","Likes");

console.log(data);

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //GENERATE RANDOM FRACTIONS

function randomFunction() {

    return Math.random() * 10;  //range of random numbers from 0 to 10
}

console.log(randomFunction());

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //GENERATE RANDOM WHOLE NUMBERS

function randomWholeNumber(){

    return Math.floor(Math.random() * 20)  //Math.floor = whole number
}

console.log(randomWholeNumber())

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

function randomWholeNumRange(min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;  //IDK how it works
}

console.log(randomWholeNumRange(1,5))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE THE PARSEINT FUNCTION

function convertToInteger(str){
    
    return parseInt(str);
}

console.log(convertToInteger("88"))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE THE PARSEINT FUNCTION WITH A RADIX

function convertToInteger232(str){
    
    return parseInt(str, 2); //convert the string 1001010 binary number to whole number
}

console.log(convertToInteger232("1001010"))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE THE CONDOTIONAL (TERNARY) OPERATOR

function checkEqual(a,b){
    return a===b ? true:false //SAME AS BELOW

    return a===b; //SAME AS ABOVE
}

console.log(checkEqual(1,1));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE MULTIPLE CONDITIONAL (TERNARY) OPERATORS

function checkEqual2(a,b){
    return a===b ? "SHIT":"FUCK"
}

console.log(checkEqual2(1,1));

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE MULTIPLE CONDITIONAL (TERNARY) OPERATORS

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

console.log(checkSign(-1))
console.log(checkSign(1))
console.log(checkSign(0))

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USING LET IN DECLARING VARIABLES WILL SHOW ERROR IF THE VARIABLE HAS BEEN DUPLICATED.
            // "use strict"; CHATGPT: enables strict mode in your code. 
            // It is a way to opt in to a restricted variant of JavaScript that disallows certain 
            // error-prone features and enforces a stricter set of rules for writing code. 
            // Error Prevention
            // Prevents Variable Leaks
            // Eliminates this Coercion
            // Prohibits Octal Syntax
            // Enhances Security
            // Reserved Words

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //COMPARE SCOPES OF THE VAR AND LET KEYWORDS

function checkScope(){
    "use strict";
        var i = "function scope";
        if (true){
            i = "block scope";
            console.log("Block scope is: ", i);
        }
        console.log("function scope is: ", i);
        return i;
}

console.log(checkScope());

//OUTPUT IS 
// Block scope is:  block scope
//script.js:1107 function scope is:  block scope
//block scope

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkScope2(){
    "use strict";
        let i = "function scope";
        if (true){
           let i = "block scope";
            console.log("Block scope is: ", i);
        }
        console.log("function scope is: ", i);
        return i;
}

console.log(checkScope2());

// OUTPUT IS
// Block scope is:  block scope
//function scope is:  function scope
//function scope

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkScope3(){
    "use strict";
        //let i = "function scope";   //IF COMMENTED
        if (true){
           let i = "block scope";
            console.log("Block scope is: ", i);
        }
        console.log("function scope is: ", i);
        return i;
}

console.log(checkScope3());

//OUTPUT WILL HAVE ERROR BECAUSE VARIABLE i IN console.log("function scope is: ", i); IS NOT DECLARED
//BUT IF  var i = "block scope"; IS USED, THEN THE OUTPUT IS block scope
//OUTPUT HAS 12 INSTEAD OF ERROR, TESTED IN ONLINE COMPILER "PROGRAMIZ", IT SHOULD HAVE AN ERROR

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD

function printManyTimes(str){
    "use strict";

    const sentence = str + " is cool!"  //if var sentence is used then it will give an OUTPUT of freeCodeCamp is cool!
                                        //But if var is changed to const sentence then it will give an ERROR
    sentence = str + " is awesome!"     //if const is used then it can't be assigned afterwards, that is why it gives an ERROR

    for(var i = 0; i < str.length; i+=2){
        console.log(sentence);
    }
}

console.log(printManyTimes("freeCodeCamp"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function printManyTimes2(str){
    "use strict";

    const SENTENCEE = str + " is cool!"   //if using the keyword const then it should be in capital letters

    for(let i = 0; i < str.length; i+=2){  //change from var to let
        console.log(SENTENCEE);
    }
}

console.log(printManyTimes2("freeCodeCamp"));