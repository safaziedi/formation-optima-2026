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
// const express = require('express'); // Import the Express framework
// const app = express();              // Initialize the Express application
// const port = 9999;                  // Define the server port

// /** * MIDDLEWARES 
//  */

// // 1. Built-in middleware to parse incoming requests with JSON payloads
// // Important: This allows you to access req.body
// app.use(express.json()); 

// // 2. Built-in middleware to parse incoming requests with URL-encoded payloads (form data)
// app.use(express.urlencoded({ extended: true }));

// // 3. Custom Global Middleware: Logging every single request
// app.use((req, res, next) => {
//   const timestamp = new Date().toISOString();
//   console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
  
//   // CRITICAL: Always call next() or the request will hang forever!
//   next(); 
// });

// /**
//  * ROUTES
//  */

// // Root route
// app.get('/', (req, res) => {
//   console.log('Accessing the root route...');
//   res.send('Success! Your Express server is running perfectly.');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is successfully running on http://localhost:${port}`);
// });

// //V3
// /**
//  * 1. VARIABLES & CONFIGURATION
//  * All imports and environment-related variables go here.
//  */
// const express = require('express');   // Import the Express framework
// const mongoose = require('mongoose');  // Import Mongoose for MongoDB
// const app = express();                // Initialize the Express application
// const port = 9999;                    // Define the server port
// const mongoURI = 'mongodb://localhost:27017/optima'; // Database connection string

// /**
//  * 2. MIDDLEWARES
//  * Functions that process the request before it reaches the routes.
//  */
// // Built-in middleware to parse JSON and URL-encoded bodies
// app.use(express.json()); 
// app.use(express.urlencoded({ extended: true }));

// // Custom Global Middleware: Logging every single request
// app.use((req, res, next) => {
//   const timestamp = new Date().toISOString();
//   console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
//   next(); // Pass control to the next handler
// });

// /**
//  * 3. ROUTES
//  * Define your API endpoints here.
//  */
// app.get('/', (req, res) => {
//   console.log('Accessing the root route...');
//   res.send('Success! Your Express server is running and was started AFTER DB connection.');
// });

// /**
//  * 4. START SERVER & DATABASE CONNECTION
//  * Only launch the web server if the database is ready.
//  */
// mongoose.connect(mongoURI)
//   .then(() => {
//     // Database connection is successful
//     console.log('Successfully connected to MongoDB');

//     // Start listening for requests
//     app.listen(port, () => {
//       console.log(`Server is successfully running on http://localhost:${port}`);
//     });
//   })
//   .catch((err) => {
//     // Stop everything if the database connection fails
//     console.error('CRITICAL ERROR: Could not connect to MongoDB. Server not started.', err);
//     process.exit(1); 
//   });


//V4
/**
 * 1. VARIABLES & CONFIGURATION
 * All imports and environment-related variables go here.
 */
const express = require('express');   // Import the Express framework
const mongoose = require('mongoose');  // Import Mongoose for MongoDB
const app = express();                // Initialize the Express application
const port = 9999;                    // Define the server port
const mongoURI = 'mongodb://localhost:27017/optima'; // Database connection string

/**
 * 2. MIDDLEWARES
 * Functions that process the request before it reaches the routes.
 */
// Built-in middleware to parse JSON and URL-encoded bodies
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// Custom Global Middleware: Logging every single request
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
  next(); // Pass control to the next handler
});

/**
 * 3. ROUTES
 * Define your API endpoints here.
 */
app.get('/', (req, res) => {
  console.log('Accessing the root route...');
  res.send('Success! Your Express server is running and was started AFTER DB connection.');
});

/* LES API: CRUD For User */
const userRoutes = require('./routes/UserRoutes');
app.use('/user', userRoutes);


/**
 * 4. START SERVER & DATABASE CONNECTION
 * Only launch the web server if the database is ready.
 */
mongoose.connect(mongoURI)
  .then(() => {
    // Database connection is successful
    console.log('Successfully connected to MongoDB');

    // Start listening for requests
    app.listen(port, () => {
      console.log(`Server is successfully running on http://localhost:${port}`);
    });
  })
  .catch((err) => {
    // Stop everything if the database connection fails
    console.error('CRITICAL ERROR: Could not connect to MongoDB. Server not started.', err);
    process.exit(1); 
  });