//V1
// const express = require('express'); // Import the Express framework
// const app = express();              // Initialize the Express application
// const port = 9999;                  // Define the server port

// // Define a root / route
// app.get('/', (req, res) => {
//   // Log the activity to the terminal
//   console.log('Accessing the root route...');
//     res.send('Success! Your Express server is running perfectly.');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is successfully running on http://localhost:${port}`);
// });


//V2
const express = require('express'); // Import the Express framework
const app = express();              // Initialize the Express application
const port = 9999;                  // Define the server port

/** * MIDDLEWARES 
 */

// 1. Built-in middleware to parse incoming requests with JSON payloads
// Important: This allows you to access req.body
app.use(express.json()); 

// 2. Built-in middleware to parse incoming requests with URL-encoded payloads (form data)
app.use(express.urlencoded({ extended: true }));

// 3. Custom Global Middleware: Logging every single request
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
  
  // CRITICAL: Always call next() or the request will hang forever!
  next(); 
});

/**
 * ROUTES
 */

// Root route
app.get('/', (req, res) => {
  console.log('Accessing the root route...');
  res.send('Success! Your Express server is running perfectly.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is successfully running on http://localhost:${port}`);
});