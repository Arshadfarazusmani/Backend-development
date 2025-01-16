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

