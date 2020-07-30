// module
const express = require("../JSON/node_modules/express");
const path = require("path");
const hbs = require("../JSON/node_modules/hbs");
const app = express();
const port = process.env.PORT || 3000;

// path
const publicPath = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");

// serve static asset
app.use(express.static(publicPath));

// hbs setup
app.set("view engine", "hbs");
app.set("views", viewPath);

// route handling index
app.get("/", (req, res) => {
    res.render("");
});
// route handling weather
app.get("/weather", (req, res) => {
  res.render("weather");
});

app.listen(port, (req, res) => {
  console.log("server is up and listening on port " + port);
});
