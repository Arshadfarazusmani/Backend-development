/**
 * reading from the file 
 */

import fs from "fs"
// console.log(fs);

const content = fs.readFileSync("4.input.txt")
console.log(`${content}`);

