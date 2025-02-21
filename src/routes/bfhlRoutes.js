const express = require("express");
const { handlePostRequest, handleGetRequest } = require("../controllers/bfhlController");

const router = express.Router();

// Root route with message and operation code
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Bajaj Finserv Health API! Use the /bfhl route for POST requests.",
    operation_code: 1,
  });
});

// Existing routes
router.post("/bfhl", handlePostRequest);
router.get("/bfhl", handleGetRequest);

module.exports = router;
