const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is Up and Running");
});

const users = [
  {
    id: 1,
    name: "deepak",
    age: 23,
  },
  {
    id: 2,
    name: "ram",
    age: 23,
  },
  {
    id: 3,
    name: "syam",
    age: 23,
  },
  {
    id: 4,
    name: "sam",
    age: 23,
  },
];

// GET
app.get("/", (req, res) => {
  res.send("Backend APIs for eatsy");
});

// GET request to return all the users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// GET request to return a user with one particular id
app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => {
    return user.id == id;
  });

  if (!user) {
    res.status(404).json({ message: "User does not exist." });
  } else {
    res.json(user);
  }
});

// POST method, it is used when creating something. Here, create a new user.
app.post("/api/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;

  const user = {
    id: Math.random() * 10000,
    name: name,
    age: age,
  };

  users.push(user);
  res.json(users);
});

// UPDATE method, it is used to update something. Here, updating the user by its id.
app.put("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);

  if (!user) {
    res.status(404).json({ message: "User does not exist" });
  }

  const keys = Object.keys(req.body);

  keys.forEach((key) => {
    if (!user[key]) {
      res.status(404).end({ message: "Invalid key!" });
    }
  });

  keys.forEach((key) => {
    user[key] = req.body[key];
  });

  res.json(users);
});

// DELETE method, it is used to delete something. Here, deleting the user.

app.delete("/api/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);
  if (!user) {
    res.status(404).json({ message: "User does not exist." });
  }

  const filteredUsers = users.filter((user) => user.id == id);

  res.json(filteredUsers);
});
