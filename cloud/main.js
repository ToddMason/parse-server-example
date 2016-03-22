
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi Todd Mason!');
});
Parse.Cloud.afterSave("TestClass", function(request) {
  
	console.log("We saved some data Jerry!");
});





