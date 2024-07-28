const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes.js');



const app = express();
require('dotenv').config();



const PORT = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);

mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 