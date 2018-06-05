// this file will contain the CRUD functionality for the User created notes that will be asociated with the news articles.

var note = require("../models/Note");

module.exports = {
    get: function (data, cb) {
        Note.find({
            _headLineId: data._id
        }, cb);
    },

    save: function (data, cb) {
        var newNote = {
            _headLineId: data._id,
            date: Date,
            noteText: data.noteText
        };

        Note.create(newNote, function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                console.log(doc);
                cb(doc);
            }
        });
    },
    delete: function (data, cb) {
        Note.remove({
            _id: data._id
        }, cb);
    }

};