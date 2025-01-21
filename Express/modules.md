# Modules
A module is a JavaScript library/file that you can import into other code using Node's require() function or import 

The code below shows how we import a module by name, using the Express framework as an example. First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application. We can then access the properties and functions of the application object.

```js
const express = require("express"); // common js syntex

import express from "express" // module js syntex 
const app = express();


```

#### You can also create your own modules that can be imported in the same way.

To make objects available outside of a module you just need to expose them as additional properties on the exports object. For example, the square.js module below is a file that exports area() and perimeter() methods:
```js
const area = function (width) {
  return width * width;
};
const perimeter  = function (width) {
  return 4 * width;
};

export {area}
export {perimeter}

```