# Unhandled Promise Rejection in Express Route Handler

This repository demonstrates a common but easily overlooked error in Express.js applications: unhandled promise rejections within route handlers.  When an asynchronous operation (like a database query or network request) fails, and the `catch` block is missing or insufficient, the entire request can hang, leading to poor application performance and unresponsive routes.

The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected version with proper error handling.

## How to Reproduce

1. Clone this repository.
2. Run `npm install express` to install dependencies.
3. Run `node bug.js`.  
4. Make multiple requests to `http://localhost:3000/`.  You'll notice that approximately half of the requests will hang due to the unhandled promise rejection.