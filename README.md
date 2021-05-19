# Lab: Class 04

### Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Mongo Database, using the REST standard

#### **Data Models**

- Create 2 Mongo data models using Mongoose, exported as Node Modules
- Create a Collection Class that accepts a Mongoose Model into the constructor and assigns it as this.model
- The classes should have the following methods defined, to perform CRUD Operations:
  - create()
  - get() or read()
  - update()
  - delete()

#### **Routes**

In your express server, create a route module for each data model that you’ve created. Within the router module, create REST route handlers for each of the REST Methods that properly calls the correct CRUD method from the matching data model.

- Add a Record
  - CRUD Operation: Create
  - REST Method: POST
  - Path: /api/favorite/anime
  - Input: JSON Object in the Request Body
  - Returns: The record that was added to the database
    - You must generate an ID and attach it to the object
    - You should verify that only the fields you define get saved as a record

- Get All Records
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /api/favorite/anime
  - Returns: An array of objects, each object being one entry from your database

- Get One Record
  - CRUD Operation: Read
  - REST Method: GET
  - Path: /api/favorite/anime/60a579904e8ab40a80bd73ac
  - Returns: The object from the database, which has the id matching that which is in the path

- Update A Record
  - CRUD Operation: Update
  - REST Method: PUT
  - Path: /api/favorite/anime/60a579904e8ab40a80bd73ac
  - Input: JSON Object in the Request Body
  - Returns: The object from the database, which has the id matching that which is in the path, with the updated/changed data
    - You should verify that only the fields you define get saved as a record

- Delete A Record
  - CRUD Operation: Destroy
  - REST Method: DELETE
  - Path: /api/favorite/anime/60a579904e8ab40a80bd73ac
  - Returns: The record from the database as it exists after you delete it (i.e. null)

#### **The lab tree**

- ![Tree](https://raw.githubusercontent.com/shadykh/api-server/main/src/assets/tree.gif)

#### **Implementation Notes**

- In your server.js, require() your router modules, and use() them
- In your routers:
- require() the correct data model
- require() the collection class
- Make a new instance of the collection, using the model as a parameter

#### **Testing Requirements**

- 404 on a bad route
- The correct status codes and returned data for each REST route
  - Create a record using POST
  - Read a list of records using GET
  - Update a record using PUT
  - Destroy a record using DELETE

#### **More about the Lab**

- Github
  - For the repo ***api-server*** clicks => [here](https://github.com/shadykh/api-server).
  - Pull Requests:
    - [https://github.com/shadykh/api-server/pull/2](https://github.com/shadykh/api-server/pull/2)
    - [https://github.com/shadykh/api-server/pull/3](https://github.com/shadykh/api-server/pull/3)
  - Actions:
    - [https://github.com/shadykh/api-server/runs/2624684883?check_suite_focus=true](https://github.com/shadykh/api-server/runs/2624684883?check_suite_focus=true)
    - [https://github.com/shadykh/api-server/runs/2624686443?check_suite_focus=true](https://github.com/shadykh/api-server/runs/2624686443?check_suite_focus=true)
    - [https://github.com/shadykh/api-server/runs/2624686951?check_suite_focus=true](https://github.com/shadykh/api-server/runs/2624686951?check_suite_focus=true)
  - Local Tests:
    - ![Local Test Image](https://raw.githubusercontent.com/shadykh/api-server/main/src/assets/server_test_js.PNG)
  - GitHub Tests:
    - ![github tests](https://raw.githubusercontent.com/shadykh/api-server/main/src/assets/githubtests.PNG)

- Heroku
  - For the link of the ***deployment main branch => /api/favorite/games <= route***  clicks => [here](https://shady-basic-api-server.herokuapp.com/api/favorite/games).

- UML:
  - ![UML](https://raw.githubusercontent.com/shadykh/api-server/main/src/assets/uml.PNG)

- Tests:
  - run `npm test server.test.js`
  - Test the routes and statues➡️ [server.test.js]

- I did this lab with help of
  - dependencies
    - morgen
    - mongoose
    - cors
    - express
    - dotenv
  - devDependencies
    - supertest
    - jest
    - eslint
  - framework
    - Node.js
  - tools
    - Github.
    - Heroku.
    - VsCode.
    - Ubuntu.
    - atlas mongodb

## Notes

- SQL vs NoSQL:
  - SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database.
  - SQL databases have predefined schema whereas NoSQL databases have dynamic schema for unstructured data.
    - > for further information clicks => [here](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)
- Data Model:
  - A data model (or datamodel) is an abstract model that organizes elements of data and standardizes how they relate to one another and to the properties of real-world entities. For instance, a data model may specify that the data element representing a car be composed of a number of other elements which, in turn, represent the color and size of the car and define its owner.
    - > for further information clicks => [here](https://en.wikipedia.org/wiki/Data_model#:~:text=A%20data%20model%20(or%20datamodel,properties%20of%20real%2Dworld%20entities.))
- REST:
  - Representational state transfer (REST) is a software architectural style which uses a subset of HTTP. It is commonly used to create interactive applications that use Web services. A Web service that follows these guidelines is called RESTful. Such a Web service must provide its Web resources in a textual representation and allow them to be read and modified with a stateless protocol and a predefined set of operations.
    - > for further information clicks => [here](https://en.wikipedia.org/wiki/Representational_state_transfer)
- Mongoose:
  - Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
    - > for further information clicks => [here](https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/)

- Connection string:
  - In computing, a connection string is a string that specifies information about a data source and the means of connecting to it. It is passed in code to an underlying driver or provider in order to initiate the connection. Whilst commonly used for a database connection, the data source could also be a spreadsheet or text file.
    - > for further information clicks => [here](https://en.wikipedia.org/wiki/Connection_string)
<br>

---
<br>

- ### Shady Khaled github ✅

  - [Shady Khaled](https://github.com/shadykh)

- ### Shady Khaled reading notes 📚

  - [Shady Khaled reading notes](https://shadykh.github.io/reading-notes/)

- ### Shady Khaled portfolio 💬

  - [Shady Khaled portfolio](https://portfolio-shady.herokuapp.com/)
