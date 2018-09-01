var db = require("../models");

module.exports = function (app) {
    app.get("/api/colors", function (req, res) {
        console.log(res);

        if (req.params.id) {
            db.colors.findById(req.params.id).then(function (dbColors) {
                res.json(dbColors);
            });
        } else {
            db.colors.findAll({}).then(function (dbColors) {
                res.json(dbColors);
                console.log(dbColors);
            });
        }
    });

        //for getting HTML colors only
        app.get("/api/colors/html", function (req, res) {
            db.colors.findAll({
                    where: {
                        colorSource:"HTML color"
                    }
                })
                .then(function (dbColors) {
                    res.json(dbColors);
                });
        });

                //for getting HTML colors only
                app.get("/api/colors/user", function (req, res) {
                    db.colors.findAll({
                            where: {
                                colorSource:"User"
                            }
                        })
                        .then(function (dbColors) {
                            res.json(dbColors);
                        });
                });

    //route for posting a new color
    app.post("/api/colors", function (req, res) {
        console.log(req.body);
        db.colors.create(req.body)
            .then(function (dbColors) {
                res.json(dbColors);
            });
    });

    // DELETE route for deleting a color
    app.delete("/api/colors/:id", function (req, res) {
        db.colors.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbColors) {
                res.json(dbColors);
            });
    });

    //route for getting a single color???
    app.get("/api/colors/:id", function (req, res) {
        db.colors.findOne({
                where: {
                    id: req.params.id
                }
            })
            .then(function (dbColors) {
                res.json(dbColors);
            });
    });
};