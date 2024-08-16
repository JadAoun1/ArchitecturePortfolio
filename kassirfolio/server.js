const express = require('express');
const path = require('path');
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'assets')));

// Route to serve the index page with components
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the navbar component
app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/navbar.html'));
});

// Route to serve the header component
app.get('/header', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/header.html'));
});

// Route to serve the footer component
app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/footer.html'));
});

// Route to serve project cards
app.get('/project-card', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/project-card.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
