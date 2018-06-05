// Script for scrapping fro the website

//Require Request
var request = require("request");
//require cheerio
var cheerio = require("cheerio");

var scrape = function (cd) {
    request("http://www.nytimes.com", function (err, res, body) {

        var $ = cheerio.load(body);

        var articles = [];


        // On the nytimes website the articles are inside a theme-summary div, so we grab it
        $(".theme-summary").each(function (i, element) {
            var head = $(this).children(".story-heading").text().trim();
            var sum = $(this).children(".summary").text().trim();

            // If the headlines and the summay was successfully retrieved
            // if (head && sum) {
            //     var headNeat = head.replace()(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
            //     var sumNeat = sum.replace()(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

            //     
            // }
            var addData = {
                headLine: head,
                summary: sum
            };

            articles.push(addData);

        });
        cb(articles);
    });
};

module.exports = scrape;