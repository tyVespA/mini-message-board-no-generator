const express = require("express");
const app = express();

const router = require("./routes/index");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", router);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port:", port);
  }
});
