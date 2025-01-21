# What does Express code look like?
In a traditional data-driven website, a web application waits for HTTP requests from the web browser (or other client). When a request is received the application works out what action is needed based on the URL pattern and possibly associated information contained in POST data or GET data. Depending on what is required it may then read or write information from a database or perform other tasks required to satisfy the request. The application will then return a response to the web browser, often dynamically creating an HTML page for the browser to display by inserting the retrieved data into placeholders in an HTML template.

Express provides methods to specify what function is called for a particular HTTP verb (GET, POST, PUT, etc.) and URL pattern ("Route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response. You can use Express middleware to add support for cookies, sessions, and users, getting POST/GET parameters, etc. You can use any database mechanism supported by Node (Express does not define any database-related behavior).


### hello world !!
```js
import express from "express"
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

```
## Let's Breakdown
The first two lines require() (import) the express module and create an Express application
```js
import express from "express"; // import express module to create express application 
const app= express(); // object 
```
- #### Express Application ->  The app object conventionally denotes the Express application.

This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)


### Middle 

The middle part of the code (the three lines starting with app.get) shows a route definition.

```js
app.get("/", function(req, res){
    res.send("Hello World !!")

})

```
The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root.

The callback function takes a request and a response object as arguments, and calls send() on the response to return the string "Hello World!"

### Final block 
```js
app.listen(port,()=>{
    console.log("app listenning on port : ",port)
})
```
The final block starts up the server on a specified port ('3000') and prints a log comment to the console. With the server running, you could go to localhost:3000 in your browser to see the example response returned.