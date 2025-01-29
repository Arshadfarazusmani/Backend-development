/**
 * reading from the file 
 */

import fs from "fs"

const content = fs.readFileSync("4.input.txt")
console.log(`${content}`);

