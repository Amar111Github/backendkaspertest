const express = require("express");
const app = express();
const cors = require('cors');
require("dotenv").config();
const path = require("path");

// Middleware to parse JSON bodies
app.use(express.json());

// Database configuration
const dbConfig = require("./config/dbConfig");

// Routes
const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const reportsRoute = require("./routes/reportsRoute");

// CORS configuration
app.use(cors({
  origin: ["http://localhost:3000", "http://3.110.244.249:3000"], // List of allowed origins
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
}));

// Use the routes
app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", reportsRoute);

// Serve static files from the React frontend app if you're deploying both frontend and backend together
// Uncomment this section if needed for deployment
// const staticPath = path.join(__dirname, "../client/build");
// app.use(express.static(staticPath));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(staticPath, "index.html"));
// });

// Get the port from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

