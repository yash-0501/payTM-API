var express     = require("express"),
    router      = express.Router(),    
    app         = express(),
    bodyParser  = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.render("landing")
});

app.get("/payment", function(req,res){
    res.redirect('http://localhost:8080')
})

app.listen(3000, function(){
    console.log("started server");
});

// app.listen(process.env.PORT, process.env.IP);
