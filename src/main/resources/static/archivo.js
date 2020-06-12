$('document').ready(function() {

 $('.miboton').on("click", function (){
	 var uName="fox";
	 var passwrd="julian";

		 
		 $.ajax({
			 url: "http://localhost:8081/getPersona", 
			 type:  "GET" ,
			 beforeSend: function (xhr){ 
			        xhr.setRequestHeader('Authorization', "Basic " + btoa(uName+":"+passwrd)); 
			    },
			 success: function(resultado){
				 $('.letrero').append(resultado.nombre + resultado.apellido);
			
				
			
				 
			 } , 
			 error: function(error){}  ,
			 
		 });
		 
	 });
	 
	
	
	
	
	
	
});