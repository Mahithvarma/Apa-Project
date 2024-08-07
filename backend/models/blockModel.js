const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    flatNo: {
        type: Number,
        required: true
    },
    flatType: {
        type: String,
        required: false,
        default: "2BHK"
    },
    flatArea: {
        type: Number,
        required: false,
        default: 5000
    },
    flatPrice: {
        type: Number,
        required: false,
        default: 10000
    },
    flatStatus: {
        type: String,
        required: true
    },
    flatFamily: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
    }
}, { _id: false });


const blockSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: false,
    },
    name:{
        type: String,
        required: true
    },
    totalFloors:{
        type: Number,
        required: true,
    },
    flats:{
        type: [flatSchema],
        required: true,
    }
    
});

module.exports = mongoose.model("Block", blockSchema, "block");