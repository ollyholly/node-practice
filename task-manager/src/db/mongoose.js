const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model("User", {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const me = new User({
  name: "Mocca",
  age: 5
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch(error => {
    console.log("Error!", error);
  });

const Task = mongoose.model("Task", {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const dishes = new Task({
  description: "Wash dishes",
  completed: false
});

dishes
  .save()
  .then(() => {
    console.log(dishes);
  })
  .catch(error => {
    console.log("Error!", error);
  });
