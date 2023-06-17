const express = require("express");
const morgan = require("morgan");
const path = require("path");
const methodOverride = require("method-override");
const indexRoutes = require("./routes/index-routes");
const herbalRoutes = require("./routes/herbal-routes");
// const cors = require("cors");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));
app.set('view engine','ejs');
app.use(methodOverride("_method"));
// app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", indexRoutes);
app.use("/", herbalRoutes);
mongoose
  .connect(
   
"mongodb+srv://sunsha:pink45@cluster0.hvgjzle.mongodb.net/sunshaholistic?retryWrites=true",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("çonnected to DB"));


//  app.get("/",(req,res)=> {
//     res.render("pages/index");
//  });
//  app.get("/about", (req, res) => {res.render("pages/about");
// });
// app.get("/book", (req,res) => {
//     res.render("pages/book");
// });
// app.get("/herbals", (req,res)=> {
//     res.render("pages/herbals");
// });

// app.get("/herbals/:id", (req,res)=>{
//     res.render("pages/herbals");
// });

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
 });