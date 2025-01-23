# DataBase connection 
In this course we are using mongoDB Atlas .

## What is MongoDB Atlas?
MongoDB Atlas is a cloud-based, fully managed database-as-a-service (DBaaS) provided by MongoDB, Inc.. It simplifies the process of deploying, managing, and scaling MongoDB databases in the cloud. With Atlas, developers can focus on building applications rather than worrying about infrastructure and database maintenance.

### How to Get Started with MongoDB Atlas
Sign Up:

Create an account at MongoDB Atlas.

Create a Cluster:

Choose a cluster type (shared, dedicated, or serverless).
Select a cloud provider (AWS, Azure, or GCP) and a region.

Whitelist IP Address:

Add your local machine's IP address or a range of addresses that can access the database.

Connect to Your Cluster:

Use the connection string provided in the Atlas dashboard to connect to your cluster.

.env->

```js
MONGO_URI=mongodb+srv://Arshad_Faraz_Usmani:your-password@backendlearning.dus8u.mongodb.net

```
Can be eccess using 
```js
const db_uri=Process.env.MONGO_URI
```

