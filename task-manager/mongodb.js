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

    db.collection("users")
      .updateOne(
        {
          _id: new ObjectID("5e0de564e812620868f973e7")
        },
        {
          $inc: {
            age: 2
          }
        }
      )
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log("Error!", error);
      });

    db.collection("tasks")
      .updateMany(
        { completed: false },
        {
          $set: {
            completed: true
          }
        }
      )
      .then(result => {
        console.log(result.modifiedCount);
      })
      .catch(error => {
        console.log("Error!", error);
      });
  }
);
