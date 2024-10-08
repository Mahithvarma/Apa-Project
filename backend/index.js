const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const adminauthRoutes = require('./routes/authRoutes/adminRoutes.js');
const familyauthRoutes = require('./routes/authRoutes/familyRoutes.js');
const blockRoutes = require("./routes/blockRoutes/blockRoutes.js");




const app = express();
require('dotenv').config();



const PORT = process.env.PORT;
const mongo_url = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use("/api/auth", adminauthRoutes);
app.use("/api/auth", familyauthRoutes);
app.use("/api/block", blockRoutes);

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