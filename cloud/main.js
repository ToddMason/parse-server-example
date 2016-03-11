
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi Todd Mason!');
});

Parse.Cloud.afterSave(“TestClass”, function(request) {   
   

});



