const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 10
    },
    role:{
        type: String,
        enum: ['admin', 'superadmin'],
        required: true
    },
    aadhaar: {
        type: String,
        required: true,
        unique: true,
        minlength: 12,
        maxlength: 12
    },
    address: {
        type: String,
        required: true,
    }
}, { timestamps: true });

module.exports = mongoose.model("Admin", adminSchema, "admin");