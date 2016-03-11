
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi Todd Mason!');
}

Parse.Cloud.beforeSave(“TestClass”, function(request, response) {
  if (request.object.get(“phone”) = 0) {
    response.error(“phone number required”);
  } 
  else {
    response.success();
  }
}

);

