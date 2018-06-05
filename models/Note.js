// This file includes the Schema for the user created notes associated to the news headlines  to be saved in to MongoDB.
// We are using Mongoose to communicate with the database.
var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var noteSchema = new  Schema ({
    _headLineId: {
        type: Schema.Types.ObjectId,
        ref: "HeadLine"
    },
    created: {
        type: Date,
        default: Date.now
    },
    noteText: String
});

var Note = mongoose.model ("Note", noteSchema);
module.exports = Note;