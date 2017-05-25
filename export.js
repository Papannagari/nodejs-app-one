/*var string = "I am from import"

module.exports = string;*/

var wish = function(name){
	return "heloo gmng"+name;
}

var displayMsg = function(){
	return "Thsi displays message";
}
/*module.exports = {
wish:wish,
display:displayMsg
};
*/


/*module.exports = function(){
	return "This is new function";
}
*/

module.exports.show = function(){
	return "This is new function";
}
