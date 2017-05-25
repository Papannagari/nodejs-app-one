var express = require("express");

var  app = express();

var  router = express.Router();

var importData = require("./export.js");
//console.log(importData("tech minds"));

//console.log(importData.display());

//console.log(importData());

console.log(importData);

router.get("/",function(request,response){
	response.json({message : "hi Hyderabad"})

})

router.get("/user",function(request,response){
	response.json({message : "This is end point"})

})

router.get("/customer",function(request,response){
	var custObj = {

	name:"Papa Srinivas",
	id:"124",
	email:"srinuswan47@gmail.com"
}
	 response.json(custObj);
})
app.use("api",router)



var PORT = process.env.PORT || 1337

app.listen(1337,function(){
	console.log("server listening at port "+PORT)
})