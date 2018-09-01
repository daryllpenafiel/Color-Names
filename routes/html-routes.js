var path = require("path");

module.exports = function (app) {
  //home page
  app.get("/", function (req, res) {
    res.render(path.join(__dirname, "../views/colors"));
  });

  app.get("/home", function (req, res) {
    res.render(path.join(__dirname, "../views/colors"));
  });

  //colors page
  app.get("/allColors", function (req, res) {
    res.render(path.join(__dirname, "../views/colors"));
  });

  //colors page
  app.get("/byColor/*", function (req, res) {
    res.render(path.join(__dirname, "../views/byColor"));
  });

  //error
  app.get("/*", function (req, res) {
    res.render(path.join(__dirname, "../views/404"));
  });


};