# Data Modelling for Backend with Mongoose 

#### -> *First Question : What Data is to store 
Most important -> What are the Entity sets ?

## Mongoose 


Mongoose is described as “
elegant MongoDB object modeling for Node.js.
”

Mongoose is an ODM (Object Data Modeling)/ORM(Object Relational Mapping) library for MongoDB.


 ![alt text](/img/image-9.png)



 Many Node.js developers choose to work with Mongoose to help with data modeling, schema enforcement, model validation, and general data manipulation. And Mongoose makes these tasks effortless.

 ### Why Mongoose?
By default, MongoDB has a flexible data model. This makes MongoDB databases very easy to alter and update in the future. But a lot of developers are accustomed to having rigid schemas.
Mongoose forces a semi-rigid schema from the beginning. With Mongoose, developers must define a Schema and Model.


Using Mongoose or any other ODM (Object-Document Mapping) library, such as Sequelize for SQL databases, provides numerous benefits when working with databases in modern application development. Here's why you should consider using Mongoose or an equivalent ODM:

1. Schema Definition & Data Modeling
Why? MongoDB is schema-less, but in most applications, your data follows a predictable structure.

Mongoose allows you to define schemas for your data, providing structure and validation.

This makes it easier to enforce consistency across your database records.

Without an ODM, you'd need to manually validate and enforce schemas in your codebase.

## creating schema

```js
import mongoose from "mongoose";
const TodoSchema = new mongoose.Schema({

    // schema 
},{timestamps:true});

export const Todo = mongoose.model("Todo", TodoSchema);
```
Example User model 
```js
import mongoose from "mongoose"; // module js syntax
// import { type } from "os";
const UserSchema=new mongoose.Schema({
    username:{
        type : String,
        required:true,
        unique:true,
        lowercase:true

    },

    email:{
        type:String,
        required:true,
        unique:true,
        

    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Password must be at least 6 characters long"]
    },
},{timestamps:true});

export const User=mongoose.model("User",UserSchema);


```
## Timestamps 
Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

- createdAt: a date representing when this document was created
- updatedAt: a date representing when this document was last updated

Mongoose will then set createdAt when the document is first inserted, and update updatedAt whenever you update the document using save(), updateOne(), updateMany(), findOneAndUpdate(), update(), replaceOne(), or bulkWrite().

```js
const userSchema = new Schema({ name: String }, { timestamps: true });
const User = mongoose.model('User', userSchema);

let doc = await User.create({ name: 'test' });

console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.244Z

doc.name = 'test2';
await doc.save();
console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.307Z

doc = await User.findOneAndUpdate({ _id: doc._id }, { name: 'test3' }, { new: true });
console.log(doc.createdAt); // 2022-02-26T16:37:48.244Z
console.log(doc.updatedAt); // 2022-02-26T16:37:48.366Z
```
The createdAt property is immutable, and Mongoose overwrites any user-specified updates to updatedAt by default.

```js
let doc = await User.create({ name: 'test' });

console.log(doc.createdAt); // 2022-02-26T17:08:13.930Z
console.log(doc.updatedAt); // 2022-02-26T17:08:13.930Z

doc.name = 'test2';
doc.createdAt = new Date(0);
doc.updatedAt = new Date(0);
await doc.save();

// Mongoose blocked changing `createdAt` and set its own `updatedAt`, ignoring
// the attempt to manually set them.
console.log(doc.createdAt); // 2022-02-26T17:08:13.930Z
console.log(doc.updatedAt); // 2022-02-26T17:08:13.991Z

// Mongoose also blocks changing `createdAt` and sets its own `updatedAt`
// on `findOneAndUpdate()`, `updateMany()`, and other query operations
// **except** `replaceOne()` and `findOneAndReplace()`.
doc = await User.findOneAndUpdate(
  { _id: doc._id },
  { name: 'test3', createdAt: new Date(0), updatedAt: new Date(0) },
  { new: true }
);
console.log(doc.createdAt); // 2022-02-26T17:08:13.930Z
console.log(doc.updatedAt); // 2022-02-26T17:08:14.008Z
```

### Refrence to diffrent entity 
```js
// todo schema 
 createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
```

n the given code, subTodos is defined as an array of ObjectIds that reference the SubTodo model. This design allows a Todo document to have multiple associated SubTodo documents. Here are the reasons for using an array:

One-to-Many Relationship: A single Todo can have multiple SubTodo items. Using an array allows you to store multiple references within a single Todo document.
Data Organization: It helps in organizing related data together. Each Todo can have its own set of SubTodo items, making it easier to manage and query related tasks.
Flexibility: You can easily add, remove, or update SubTodo items within a Todo without affecting other Todo documents.
Here's the relevant part of the code for reference:

This structure ensures that each Todo can have a list of SubTodo items, which can be useful for tasks that have subtasks or nested tasks.

```js
subTodos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubTodo"
}]
```