const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  aadhaarCardNo: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const familySchema = new mongoose.Schema({
  familyDetails: {
    primary: {
      type: personSchema,
      required: true,
    },
    members: {
      type: [personSchema],
      required: false,
    },
  },
  mobile: {
    type: String,
    required: true,
  },
  alternativeMobile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    match: /.+\@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  block: {
    type: String,
    required: true
  },
  flatNo: {
    type: String,
    required: true
  },
});

const Family = mongoose.model('Family', familySchema, "family");

module.exports = Family;
