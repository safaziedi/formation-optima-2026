const express = require('express'); // Import the Express framework
const app = express();              // Initialize the Express application
const port = 3000;                  // Define the server port

// Define a root route
app.get('/', (req, res) => {
  // Log the activity to the terminal
  console.log('Accessing the root route...');
  
  // Send an English response to the browser
  res.send('Success! Your Express server is running perfectly.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is successfully running on http://localhost:${port}`);
});