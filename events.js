var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
var fs = require("fs");

var path = require("path");
// var filepath = __dirname + "/sample.txt"

var filepath = path.join(__dirname,"sample.txt")
console.log(filepath)

emitter.on("star_reading",function(filepath){
	console.log("start reading file")
	fs.readFile(filepath,"utf-8",function(err,data){

		if(err){
			emitter.emit("error",err)

		}
		else{
			emitter.emit("print_content",data)
		}
		

	})
})

emitter.on("print_content",function(data){
	console.log(data)
	emitter.emit("done","successfully done reading the file")
})

emitter.on("error",function(message){
	console.log("failed")
	console.log("Error details:"+message)
})

emitter.on("done",function(message){
	
	console.log(message)
})

emitter.emit("star_reading",filepath)