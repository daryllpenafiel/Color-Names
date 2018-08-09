var path = require("path");

module.exports = function(app) {
    //home page
    app.get("/", function(req, res) {
      res.render(path.join(__dirname, "../views/index.handlebars"));
    });

    app.get("/home", function(req, res) {
        res.render(path.join(__dirname, "../views/index.handlebars"));
      });

    //post a color
    app.get("/create-a-color-form", function(req, res) {
        res.render(path.join(__dirname, "../views/postColors"));
      });

    // app.get("/allColors", function(req, res) {
    //     res.render(path.join(__dirname, "../views/guests"));
    //   });

    //error
    app.get("/*", function(req, res) {
        res.render(path.join(__dirname, "../views/404.handlebars"));
      });
    };
