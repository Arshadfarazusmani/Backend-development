# Database
A database is a structured collection of data that's stored electronically and organized for easy access and management.

A database is an electronically stored, systematic collection of data. 

It can contain any type of data, including words, numbers, images, videos, and files.

 You can use software called a database management system (DBMS) to store, retrieve, and edit data. 
 
 #### In computer systems, the word database can also refer to any DBMS, to the database system, or to an application associated with the database.

 ![alt text](/img/image-10.png)


 ## SQL vs NO-SQL Database 

 ### What is SQL?
SQL, which stands for Structured Query Language, is a domain-specific programming language (e.g., a language targeted to a specific task or problem) that is commonly used for tasks such as inserting, updating, querying, and deleting data within a database. 

SQL is also used to create and modify database schemas (e.g., data formatting rules, table/index structure ) as well as define database access and administration parameters.

### What is structured data?
Structured data is data that is organized in a consistent, predefined format and often consists of alphanumeric characters. Examples include financial transactions, inventory records, or customer lists which are often stored in SQL databases (e.g., relational databases).

## What is a SQL database?
When the term "SQL database" is used, it refers to a type of database where SQL is the primary programming language used to create and manage that database. 
#### SQL databases fall under a type of database referred to as relational databases.

## Relational databases
Relational databases, or relational database management systems (RDBMSs), store data within rows and columns which are used to form tables. 

A relationship between the two tables (or more) can be created using a foreign key. These foreign keys (e.g., unique identifiers) maintain predefined relationships that exist between the tables.

#### Example: an e-commerce relational database housing customer, product, and order information


![alt text](/img/image-11.png)

### NOTE*
It's important to note that relational databases are created and managed using a fixed schema. A fixed schema means that all data ingested into the database must be precisely aligned to predefined formatting standards which limits the types of data structures that relational databases can store.

 For example, relational databases are not able to process unstructured data (e.g., information that is inconsistent in format and isn't aligned to a preset data model) but are excellent at supporting transactional or financial information that includes structured data or semi-structured types of data (e.g., data that has a consistent format and aligns to a preset data model).

 ## Examples of SQL databases
There are a variety of different SQL database examples, including:

    -> MySql.   
    -> Oracle.       *All are (RDBMS)
    -> PostgreSql.
    -> etc.


## Not only Structured Query Language (NoSQL)
NoSQL
, which stands for Not only SQL, is a database management system approach used to ingest, store, and retrieve unstructured data and semi-structured data within a database.

The reason it is called NoSQL is to emphasize that these databases can handle non-tabular, non-relational data models as well as support SQL-like query languages.

## What is unstructured data?
Unstructured data is data that doesn't have a predefined data model or consistent organization.

 In addition, unstructured data, such as social media posts, can update and change rapidly while structured data, such as bank transactions, have a much lower rate of change. Examples of unstructured data include pictures, audio files, videos, and maps.

 ## What is a NoSQL database?
NoSQL databases are databases that utilize a flexible schema that accommodates unstructured data and semi-structured data while also utilizing a non-tabular data storage method.

The use of a flexible schema enables NoSQL databases to ingest unstructured data in its native format (e.g., .txt, .JPG, MP3), which is not possible with SQL databases due to the requirement that all data align to a predefined format.

Further, when NoSQL databases store data, flexible data models are employed so that unstructured data files can have different data structures and still be stored within the same 
collection

    example :  MongoDB
   

## Key differences between SQL vs NoSQL databases
While both SQL and NoSQL databases offer valuable functionality, it's important to understand the key differences between them.

### Database storage model :

SQL databases store data in tables containing rows and columns whereas NoSQL systems store data using various methods depending on the type of unstructured data being ingested (e.g., JSON documents, key-value pairing, family grouping, graph nodes/edges).

### Schemas
SQL databases rely on a strict, predefined data schema with which data to be ingested must align. However, NoSQL databases use flexible schemas which enable them to ingest data in its various native formats.

