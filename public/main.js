var p_links = document.querySelectorAll(".p_links");
var project = document.querySelectorAll(".project");
var proj_cont = document.querySelector("#proj_cont");
proj_cont.style.marginLeft = "0%";
var proj_width = 100 * project.length
proj_cont.style.width = proj_width + "%" ;
var mouse = false;
var curr_x;
var curr_proj = 0;
var high_index = 0;


for (var i = 0; i < p_links.length; i++) {
	(function (i) {
		var pos = -(100 * i) + "%";
		var target = p_links[i];
		target.addEventListener("click", function(){
			$("#proj_cont").animate({"margin-left": pos}, 500);
			changeHighlight(i);
		});
	}(i))
};




proj_cont.addEventListener("mousedown", function(e){
	mouse = true;
	curr_x = e.clientX / window.innerWidth * 100;
});

proj_cont.addEventListener("mouseup", function(){
	mouse = false;
	var current = window.parseFloat(proj_cont.style.marginLeft.replace("%",""));
	if( current < -(curr_proj * 100) ){
		if( current < -(curr_proj * 100 + 25) ){
			curr_proj++;
			
		}
		var new_pos = -(curr_proj * 100) + "%";
		$("#proj_cont").animate({"margin-left": new_pos}, 200);	
		changeHighlight(curr_proj)
	}else{
		if( current > -( (curr_proj - 1) * 100 + 75) ){
			if(curr_proj > 0){curr_proj--;}
		}
		var new_pos = -(curr_proj * 100) + "%";
		$("#proj_cont").animate({"margin-left": new_pos}, 200);
		changeHighlight(curr_proj)
	}
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

function changeHighlight(i){
	p_links[high_index].classList.remove('highlight'); 
	p_links[high_index].classList.add('unhigh');
	p_links[i].classList.add('highlight');
	p_links[i].classList.remove('unhigh');
	high_index = i;	
};
