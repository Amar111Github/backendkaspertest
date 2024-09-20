const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors');

app.use(express.json());
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const resportsRoute = require("./routes/reportsRoute");

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", resportsRoute);

const port = process.env.PORT || 5000;

const path = require("path");

app.use(cors({
  origin: ["http://3.110.244.249:3000"], // Adjust depending on your front-end URL
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

// Fallback to serve index.html for any random GET request
app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
