# dotenv
Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env

Enable  Storing configuration in the environment separate from code

-> Firt of All import and   configure dotenv in your index.js file 
```js
import dotenv from "dotenv"

dotenv.config({
    path:"Backend_with_express_and_mongoose/Backend_Project/.env"
});
```
you have to provide complete path to .env file 
```js
dotenv.config({
    path:"Backend_with_express_and_mongoose/Backend_Project/.env"
});
```

### Package.json
```js
 "scripts": {
    "dev": "nodemon -r dotenv/config  Backend_with_express_and_mongoose/Backend_Project/src/index.js"
  }
```

you have to run the commant with (-r dotenv/config) flag 
```js
"nodemon -r dotenv/config  {path}"
```
