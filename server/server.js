const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./database/conn");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());
// app.use(require('./router/auth'));

app.get("/", (req, res) => {
  res.send("Heyy, Welcome to the Airtribe server!");
});

// Start the server
const PORT = 5050; 

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
