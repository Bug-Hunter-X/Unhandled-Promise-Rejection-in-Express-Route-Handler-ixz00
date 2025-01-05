const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // No error handling here. If someAsyncOperation rejects, the request hangs
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a network request or database query that might fail
    const success = Math.random() < 0.5; // 50% chance of success
    setTimeout(() => {
      if (success) {
        resolve();
      } else {
        reject(new Error('Failed!'));
      }
    }, 1000); // Simulate 1 second delay
  });
}