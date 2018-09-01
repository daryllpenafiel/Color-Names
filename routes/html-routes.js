var path = require("path");

module.exports = function (app) {
  //home page
  app.get("/", function (req, res) {
    res.render(path.join(__dirname, "../views/index"));
  });

  app.get("/home", function(req, res) {
      res.render(path.join(__dirname, "../views/index"));
    });

  //post a color
  app.get("/create-a-color-form", function (req, res) {
    res.render(path.join(__dirname, "../views/postColors"));
  });

  //colors page
  app.get("/allColors", function(req, res) {
      res.render(path.join(__dirname, "../views/colors"));
    });

  //colors page
    app.get("/userColors", function(req, res) {
      res.render(path.join(__dirname, "../views/userColors"));
    });

  //error
  app.get("/*", function (req, res) {
    res.render(path.join(__dirname, "../views/404"));
  });


};