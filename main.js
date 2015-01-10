var projects = document.querySelector("#projects");
var project1 = document.querySelector("#project1");
var project2 = document.querySelector("#project2");
var project3 = document.querySelector("#project3");
var project4 = document.querySelector("#project4");
var proj_cont = document.querySelector("#proj_cont");
var project = [project1, project2, project3, project4];
var mouse = false;
var curr_x;

var counter = 0
project.forEach(function(proj){
	proj.style.left = (counter * window.innerWidth) + "px";
	counter+=1
});


projects.addEventListener("mousedown", function(e){
	mouse = true;
	curr_x = e.clientX;
});

projects.addEventListener("mouseup", function(){
	mouse = false;
});

projects.addEventListener("mousemove", function(e){
	if(mouse){
		change = e.clientX - curr_x;
		// console.log(change);
		var count = 0;
		var proj1_left = project1.style.left;
		var proj1_str = proj1_left.replace("px","");
		var barr = window.parseInt(proj1_str);
		project.forEach(function(proj){
			if(barr < 0){ //||
			 // project1.style.left >= (window.innerWidth.width * project.length) )
				var percent= proj.style.left.replace("px","");
				var left = window.parseInt(percent);
				var newValue = left + change;
				proj.style.left = newValue + "px";
				if(count === 0){
					console.log(percent);
				}
				count++;
			}
		});
		curr_x+=change;
	};
});

var left = function(){

};
var right = function(){

}