const express = require('express');
const path = require('path');

const app = express();
const port = 300;

// Serve static files (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Route to send HTML files
app.get('/page1', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'movies.html'));
});
app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'south.html'));
});
app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Punjab.html'));
});
app.get('/page4', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'bollywood.html'));
});
app.get('/page5', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Hollywood.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
