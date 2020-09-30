const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

// Create a user
app.post("/users", async (req, res) => {
  try {
    const { email } = req.body;
    const newUser = await pool.query(
      "INSERT INTO users (email) VALUES($1) RETURNING *",
      [[email]]
    );
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});
// Get all users
app.get("/users", async (req, res) => {
  try {
    const allUsers = await pool.query("SELECT * FROM users");
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});
// Get a user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      id,
    ]);
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a user

app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;
    const UpdateEmail = await pool.query(
      "UPDATE users SET email = $1 WHERE user_id = $2",
      [email, id]
    );

    res.json("Email was updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete a user's account
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await pool.query(
      "DELETE FROM users WHERE user_id = $1",
      [id]
    );
    res.json("User was Deleted");
  } catch (err) {
    console.error(err.message);
  }
});
// check for a user

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
