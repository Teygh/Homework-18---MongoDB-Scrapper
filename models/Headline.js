// This file holds the schema for the news headlines, inserted into Mongodb using Mongoose 
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var headLineSchema = new  Schema ({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: string,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
});

var Headline = mongoose.model ("HeadLine", headLineSchema);
module.exports = HeadLine;