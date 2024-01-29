if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const bodyParser = require("body-parser");
const UserController = require('./controllers/usersController');
const connectToDb = require("./config/connectToDb");
const UpdateProfile = require("./controllers/profilesController");
const app = express();
const PORT = process.env.PORT || 3000;

connectToDb();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/signup", UserController.signup );
app.post("/login", UserController.login );
app.post("/logout", UserController.logout );
app.post("/update-profile", UpdateProfile );
app.use("/", (req, res) => {
  res.status(201).send("<h2>Server is connected & Running... </h2>");
});



app.listen(PORT, () => {
  console.log(`Click to open Server ==> http://localhost:${PORT}`);
});
