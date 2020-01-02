// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    db.collection("users").findOne(
      { _id: new ObjectID("5e0de564e812620868f973e7") },
      (error, user) => {
        if (error) {
          return console.log("Unable to fetch!");
        }

        console.log(user);
      }
    );

    db.collection("users")
      .find({ age: 35 })
      .toArray((error, users) => {
        console.log(users);
      });

    db.collection("users")
      .find({ age: 35 })
      .count((error, count) => {
        console.log(count);
      });
  }
);
