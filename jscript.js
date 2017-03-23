function legs(){
		var urls = "http://localhost:8080/legs"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			error: function(jqXHR, textStatus, errorThrown) {
					 // alert if error is thrown
				},
			dataType: "json"
		});
}

function chest(){
		var urls = "http://localhost:8080/chest"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			
			dataType: "json"
		});
}

function arms(){
    var urls = "http://localhost:8080/arms"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			
			dataType: "json"
		});
}

function back(){
    var urls = "http://localhost:8080/back"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			
			dataType: "json"
		});
}

function abs(){
    var urls = "http://localhost:8080/abs"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			
			dataType: "json"
		});
}

function team(){
    var urls = "http://localhost:8080/team"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			
			dataType: "json"
		});
}




function all(){
		var urls = "http://localhost:8080/all"; // creating url
		var obj = {
		
		}; // JSON object
		$.ajax({ // ajax session to send express request 
			type:"GET", 
			url: urls,
			data: obj,		
					
			success: function(data) { // ajax success function
						var res = data;
						alert("Success");
			}, 
			error: function(jqXHR, textStatus, errorThrown) {
					 // alert if error is thrown
				},
			dataType: "json"
		});
}

