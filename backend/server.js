let express = require("express");
let mongoose = require("mongoose");
let cors = require('cors');
let data = require("./model/db");

//  mongodb+srv://tamil:epD1IJcXhAbD8NEj@cluster0.a4x0r8e.mongodb.net/newreactdata?appName=Cluster0

// mongodb+srv://tamil:epD1IJcXhAbD8NEj@cluster0.a4x0r8e.mongodb.net/newreactdata
mongoose.connect("mongodb://tamil:epD1IJcXhAbD8NEj@cluster0.a4x0r8e.mongodb.net/newreactdata");
let app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post("/post", async (req, res) => {

    let n = req.body.name;
    let p = req.body.pass;
    let e = req.body.email;
    let storedata = await data({
        name: n, password: p, email: e
    })
    storedata.save();
    console.log("dataStored")
})
app.get("/read", async (req, res) => {
    let d = await data.find();
    res.send(d);
    // console.log("send")
})
app.put("/update", async (req, res) => {
    let id = req.body.id;
    let name = req.body.name;
    setnewname = await data.findByIdAndUpdate(id, { name: name }, { new: true });
})
app.delete("/delete/:id",(req,res)=>{
    let id=req.params.id;
    data.findByIdAndDelete(id).exec();
    console.log("deleted")
})

app.listen(3000);
