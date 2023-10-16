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