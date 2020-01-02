const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    console.log("Connected correctly!");

    const db = client.db(databaseName);
    // db.collection("users").insertOne(
    //   {
    //     name: "Olly",
    //     age: 35
    //   },
    //   (error, result) => {
    //     if (error) {
    //       console.log("Unable to insert a user!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jess",
    //       age: 31
    //     },
    //     {
    //       name: "Bob",
    //       age: 25
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert users!");
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection("tasks").insertMany(
      [
        {
          description: "Wash dished",
          completed: true
        },
        {
          description: "Water plants",
          completed: true
        },
        {
          description: "Feed the dinos",
          completed: false
        }
      ],
      (error, result) => {
        if (error) {
          return console.log("Can not insert the tasks");
        }
        console.log(result.ops);
      }
    );
  }
);
