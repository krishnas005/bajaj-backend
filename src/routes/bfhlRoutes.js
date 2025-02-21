const express = require("express");
const { handlePostRequest, handleGetRequest } = require("../controllers/bfhlController");

const router = express.Router();

// Root route for testing
router.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Bajaj Finserv Health API!" });
});

// Existing routes
router.post("/bfhl", handlePostRequest);
router.get("/bfhl", handleGetRequest);

module.exports = router;