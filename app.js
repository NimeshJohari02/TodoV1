const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
const date=require(__dirname+"/date.js");

app.use(express.static("public"));

let items = [];
let worklist = [];



app.get("/", function(req, res) {
  //res.sendFile(__dirname+"/index.html")
  let day=date.getDate();
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});



app.post("/", function(req, res) {
  var item = req.body.newItem;
  if(req.body.list=="Work List")
  {

       worklist.push(item);
       res.redirect("/Work")
    //   res.redirect("/Work");
  }
  else
  {
    items.push(item);
    res.redirect("/");

  }
  //console.log(items)

});
app.get("/Work", function(req, res) {

  res.render("list", {
    listTitle: "Work List",
    newListItems: worklist
  })
});
// app.post("/Work", function(req, res) {
//   let workitem=req.body.newItem;
//   worklist.push(workitem);
//   res.redirect("/Work");
//
//
// })

app.get("/about-me",function(req,res){
  res.render("aboutMe");

})
app.listen(3000, function() {
  console.log("Server Up at 3000");
});
