var express = require("express");
var mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://localhost/workout" ||
      "mongodb://ernesto:Corona7070@ds123490.mlab.com:23490/heroku_ggznxr2t",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Mongodb connection stablished!"));

app.listen(PORT, function () {
  console.log(`Now listening on port: ${PORT}`);
});
