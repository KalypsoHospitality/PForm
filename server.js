const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
const corsOptions = {
    origin: 'https://www.kalypsohospitality.com',
    methods: 'POST',
};

app.use(cors(corsOptions)); // Use CORS middleware with specified options
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', async (req, res) => {
    try {
        // Extract form data
        const formData = req.body;

        // Forward data to Formspree
        const formSpreeResponse = await axios.post('https://formspree.io/f/maygavao', formData);

        // Handle Formspree response if needed

        // Send a response to the client
        res.send('Form submitted successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error submitting the form');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
