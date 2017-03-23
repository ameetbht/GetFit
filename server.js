var express = require('express');
var app = express();

app.use(express.static("."));
//mysql connection
var mysql = require('mysql');
var con = mysql.createConnection({
	host: 'localhost',
	user: 'ab3656',
	password: 'hell123boy',
	database: 'drexeldb'
});

con.connect(function(err) {
	if (err) {
		console.log("Error connection to database");
	}
	else {
		console.log("Database successfully connected");
	}
});



app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
     // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

//linking the two modules 
var renderController = require('./renderModule.js');
var wc = new renderController();



app.get('/chest', function (req, res) { // getting zip code	
	console.log("chest");
	res.send(wc.render(req));
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});


app.get('/arms', function (req, res) { // getting zip code	
	console.log("arms");
	res.send(wc.render(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/legs', function (req, res) {

	// getting zip code	
	res.send(wc.render(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/back', function (req, res) { // getting zip code	
	res.send(wc.render(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/abs', function (req, res) { // getting zip code	
	res.send(wc.render(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/team', function (req, res) { // getting zip code	
	res.send(wc.render(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/ex1', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/ex2', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});
app.get('/ex3', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});
app.get('/all', function (req, res) { // getting zip code	
	res.send(wc.renderThird(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/mu1', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/mu2', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/mu3', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/mu4', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});

app.get('/mu5', function (req, res) { // getting zip code	
	res.send(wc.renderSecond(req));
	
	/*
	wc.on("req",function(val){ // using zip to get hourly forecast
		wc.getWeather(val);
		wc.on("byebye", function(vals) {
			console.log(val);
			res.end(vals);
			
		})
	})
	*/
});



app.listen(8080,function(){
	
console.log('Server Running...');
});
