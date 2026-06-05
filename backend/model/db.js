let mongos=require("mongoose");

let sch= new mongos.Schema({
    name:String,
    password:String,
    email:String
}
)

let model=mongos.model("details",sch);

module.exports=model;