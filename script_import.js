            //UNDERSTAND THE DIFFERENCES BETWEEN IMPORT AND REQUIRE(EXPORT)

import { capitalizeString } from "./script_function";

const cap = capitalizeString("hello!");

console.log(cap);

//export function located at script_function.js
//OUTPUT: HELLO!

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE EXPORT TO REUSE A CODE BLOCK

const capitalizeString2 = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizeString2 }

export const foo = "bar";
export const bar = "foo";

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //USE * TO IMPORT EVERYTHING FROM A FILE

import * as capitalizeStrings from "capitalize_strings";

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULT

export default function subtract(x,y) {return x - y;} //the only thing exported in a file

//another example////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            //IMPORT A DEFAULT EXPORT (JUST LIKE ABOVE THIS ^^)

import subtract from "math_functions";            

subtract(7,4);