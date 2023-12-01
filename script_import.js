//UNDERSTAND THE DIFFERENCES BETWEEN IMPORT AND REQUIRE(EXPORT)

import { capitalizeString } from "./script_function";

const cap = capitalizeString("hello!");

console.log(cap);

//export function located at script_function.js
//OUTPUT: HELLO!