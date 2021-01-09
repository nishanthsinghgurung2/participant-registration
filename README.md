# participant-registration
Express app to CRUD participant information using mongoDB database

For this project, the generated id is used as the referenceNumber for simpler id assignment and access purpose.
Used timestamp field so that createdAt and updatedAt fields are added in the records which gives the time of creation and updation of that participant record.


# Steps to run this project
- Make sure that the mongo daemon process is running using the command `mongod` in a separate shell tab before running the app.
- Run `npm install` to install the dependencies
- Run `node index.js` to run the project
  * The server should be listening at port 3000.


# Different endpoints
Open postman and test the following endpoints
- Create a new participant registration information
  * Select the request type `POST` and enter `http://localhost:3000/participants`
  * In the request body select `raw` and `JSON` option and a body similar to this:
  ```
  {
    "name": "Mrs Julia Doe",
      "dateOfBirth": "01/01/1933",
      "phoneNumber": "+4472630238",
      "address": "21 laker st, london"
  }
  ```

- Get all the records in the participant registration system
  * Select the request type `GET` and enter `http://localhost:3000/participants`

- Get the record of a specific participant with a referenceNumber
  * Select the request type `GET` and enter `http://localhost:3000/participants/5ff97f0506e7b146cb7e0458`
  * Please note that the `referenceNumber` used here is the `_id` field generated when the record is created using the `POST` request.
  
- Update the record of a specific participant with a referenceNumber
  * Select the request type `PUT` and enter `http://localhost:3000/participants/5ff97f0506e7b146cb7e0458`
  * In the request body, update the field values that needs to be updated and press `Send`
  * Please note that the `referenceNumber` used here is the `_id` field generated when the record is created using the `POST` request.
  
- Delete the record of a specific participant with a referenceNumber
  * Select the request type `DELETE` and enter `http://localhost:3000/participants/5ff97f0506e7b146cb7e0458`
  * Please note that the `referenceNumber` used here is the `_id` field generated when the record is created using the `POST` request.
