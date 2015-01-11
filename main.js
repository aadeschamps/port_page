var project = document.querySelectorAll(".project");
var proj_cont = document.querySelector("#proj_cont");
proj_cont.style.marginLeft = "0%";
var proj_width = 100 * project.length
proj_cont.style.width = proj_width + "%" ;
var mouse = false;
var curr_x;

proj_cont.addEventListener("mousedown", function(e){
	mouse = true;
	curr_x = e.clientX / window.innerWidth * 100;
	console.log(curr_x);
});

proj_cont.addEventListener("mouseup", function(){
	mouse = false;
});


proj_cont.addEventListener("mousemove", function(e){
	if(mouse){
		var abs_pos = e.clientX / window.innerWidth * 100;
		var change = abs_pos - curr_x;
		var abs_current = proj_cont.style.marginLeft.replace("%", "");
		curr_x = e.clientX / window.innerWidth * 100;
		var current = window.parseFloat(abs_current);
		if (change < 0){
			if( (-current) < proj_width - 100){
				if(current + change <= -(proj_width - 100)){
					console.log("hello");
					change = -(proj_width - 100) - current;
				}
				move(change);
			}	
		}else if(change > 0){
			if(current < 0){
				if(current + change >= 0){
					change = -(current);
				}
				move(change);
			}
		}
	}
});

function move(change){
	var abs_current = proj_cont.style.marginLeft.replace("%", "");
	var current = window.parseFloat(abs_current);
	var new_pos = current + change;
	proj_cont.style.marginLeft = new_pos + "%";
};
