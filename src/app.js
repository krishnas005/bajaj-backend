const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimiter = require("./middleware/rateLimiter");
const bfhlRoutes = require("./routes/bfhlRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(rateLimiter);
app.use(express.json());

// Routes
app.use("/", bfhlRoutes); // Use the routes defined in bfhlRoutes.js

// Global error handler
app.use(errorHandler);

module.exports = app;