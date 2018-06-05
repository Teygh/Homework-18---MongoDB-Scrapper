//This file holds the routes to the handlebars pages [Home & Saved Articles]
//Since we have set our view engine to handlebars it knows to look in their for these files.
module.exports = function(router) {

    var headLineController = require ("../controller/headLines");
    var noteController = require("../controllers/notes");

    // The route to render the home page
    router.get("/", function (req, res) {
        res.render("home");
    });

    // The route to render the saved article page
    router.get("/saved", function (req, res) {
        res.render("saved");
    });

    router.get ("/api/fetch", function (req, res) {
        headLineController. fetch (function (err, docs) {
            if (!docs || docs.insertedCount === 0) {
                res.json ({
                    message: "NO new articles today."
                });
            }else{
                res.json({
                    message: "Added " + docs.insertedCount + " New articles!"
                });
            }
        });
    });

    router.get ("/api/headLines", function (req, res ) {
        var query = {};
        if (req.query.saved) {
            query = req.query;
        }
        headLineController.get(query, function (data) {
            res.json(data);
        });
    });

    router.delete ("/api/headLines/:id", function (req, res) {
        var query = {};
        query._id = req.params.id;
        headLineController.delete(query, function (err, data) {
            res.json (data);
        });
    });
    
    router.patch ("/api/headLines", function (req, res) {
        headLineController.update (req.body, function (err, data) {
            res.json (data);
        });
    });
    router.get ("/api/notes/:headLine_id?", function (req, res) {
        var query = {};
        if (req.params.headLine_id) {
            query._id = req.params.headLine_id;
        }
        notesController.get (query, function (err, data) {
            res.json (data);
        });
        
    });

    router.delete ("/api/note/:id", function (req, res) {
        var query = {};
        query._id = req.params.id;
        headLineController.delete(query, function (err, data) {
            res.json (data);
        });
    });

    router.post("/api/notes", function (req, res) {
        noteController.save (req.body, function (data) {
            res.json(data);
        });
    });
    }