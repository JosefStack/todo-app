import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded( {extended : true}) );
app.use(express.static("public"));


let tasksList = [];


app.post("/add", (req, res) => {
    tasksList.push(
        {
            task: req.body.task
        }
    )
    res.redirect("/");
    
})


app.get("/", (req, res) => {
    res.render("index.ejs", 
        {
            tasks : tasksList
        }
    );
})


app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
})