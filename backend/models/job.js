
// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    id: Number,
    jobName: String,
    companyName: String,
    role: String,
    createdAt: {
        type: Date, 
        default: Date.now
    },
    status: String,
    isActive: Boolean,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);