# Creating APP 
```js
import express from 'express';
const app = express();

export  {app}; // we can import app in our index file.
```

## configuring app to use cors middleware

 CORS (Cross-Origin Resource Sharing) middleware is a mechanism that allows web applications running at one origin (domain) to request resources from a different origin. This is important for enabling web applications to interact with APIs hosted on different domains.


```js
import express from 'express';
import cors from 'cors';
const app = express();

// focus here 

app.use(cors({
    // options 
    origin:process.env.CORS_ORIGIN,
    credential: true
}))

export  {app};
```
## Configuring App to use express.json() middleware 

```js 
import express from "express";
const app = express(); // Creating express application 

app.use(express.json({
    // options 
    limit:'16kb'

    // limit	Controls the maximum request body size. If this is a number, then the value specifies the number of bytes; if it is a string, the value is passed to the bytes library for parsing.
}));

```

### express.json()
?

### express.static()

The code snippet:
```js
app.use(express.static('public'));

```

is configuring the Express application to serve static files from the public directory. Here's a breakdown of what this does:

app.use(express.static('public')): This line tells the Express app to use the express.static middleware to serve static files. The public argument specifies the directory from which to serve static assets.

### Example 
```js
import express from 'express';
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
## express.urlencoded
This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.

## using cookieParser




