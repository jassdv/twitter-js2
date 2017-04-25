const express = require('express');
const app = express();
var reqArr=[]; //array that will look like this: [{GET: /},{GET: /is-anybody}




var server=app.listen(3000,()=>{
	console.log("server is listening");
});

app.get('/',function(req,res,next){
	reqArr.push({GET: req.path});
	console.log(reqArr);
	res.send('<h1>welcome</h1>');
	next();

});

app.get('/news',function(req,res,next){
	reqArr.push({GET: req.path});
	console.log(reqArr);
	res.send('<h1>welcome to news</h1>');
	next();

});

app.get('*',function(req,res,next){

	reqArr.push({GET: req.path});
	console.log(reqArr);
	next();
});

app.post('*',function(req,rea,next){
	reqArr.push({POST: req.path});
	console.log(reqArr);
	next();

});