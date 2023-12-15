const express = require("express");
const app = express();

const router = require("./routes/index");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", router);

// app.get("/", (req, res) => {
//   res.render("index", { title: "Mini Messageboard", messages: messages });
// });

app.listen(3000);
