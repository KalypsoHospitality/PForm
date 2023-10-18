const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for your frontend domain
const corsOptions = {
    origin: '*',
    methods: 'POST',
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', async (req, res) => {
    try {
        // Extract form data
        const formData = req.body;

        // Set the correct Formspree endpoint
        const formSpreeEndpoint = 'https://formspree.io/f/maygavao'; // Replace with your Formspree endpoint

        // Set headers for the Formspree request
        const headers = {
            'Content-Type': 'application/json',
            // Add any other headers required by Formspree, e.g., Authorization header
        };

        // Forward data to Formspree
        const formSpreeResponse = await axios.post(formSpreeEndpoint, formData, { headers });

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
