const { validateInput } = require("../utils/validation");

const handlePostRequest = (req, res) => {
  try {
    const { data } = req.body;

    // Validate input
    validateInput(data);

    // Separate numbers and alphabets
    const numbers = data.filter((item) => !isNaN(item));
    const alphabets = data.filter((item) => isNaN(item) && item.length === 1 && /^[A-Za-z]$/.test(item));

    // Find the highest alphabet
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.localeCompare(a))[0]] : [];

    // Prepare response
    const response = {
      is_success: true,
      user_id: "john_doe_10102023", // Replace with dynamic logic if needed
      email: "john.doe@example.com",
      roll_number: "123456",
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
};

const handleGetRequest = (req, res) => {
  res.status(200).json({ operation_code: 1 });
};

module.exports = { handlePostRequest, handleGetRequest };