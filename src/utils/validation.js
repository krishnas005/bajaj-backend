const validateInput = (data) => {
    if (!Array.isArray(data)) {
      throw new Error("Input must be an array");
    }
  
    if (data.length === 0) {
      throw new Error("Input array cannot be empty");
    }
  
    data.forEach((item) => {
      if (typeof item !== "string" && typeof item !== "number") {
        throw new Error("All elements in the array must be strings or numbers");
      }
    });
  };
  
  module.exports = { validateInput };