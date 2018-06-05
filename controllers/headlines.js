// This file will hold the CRUD functionality for the news headlines scrapped.

//Connect to scripts
var scrape = require("../scripts/scrape");

//connect to Models and the Schema that was created for Headlines and notes
var Headline = require("../models/Headline");

module.export = {

    fetch: function (cb) {
        scrape(function (data) {
            var articles = data;
            for (var i = 0; i < articles.length; i++) {
                articles[i].saved = false;
            }
            Headline.collection.insertMany(articles, {
                ordered: false
            }, function (err, docs) {
                cb(err, docs);
            });
        });
    },

    delete: function (query, cb) {
        Headline.remove(query, cb);
    },

    get: function (query, cb) {
        HeadLine.find(query)
            .sort({
                _id: -1
            })
            .exec(function (err, doc) {
                cb(doc);
            });
    },
    update: function(query, cb) {
        HeadLine.update({
            _id: query._id
        }, {
            $set: query
        }, {}, cb);
    }
}