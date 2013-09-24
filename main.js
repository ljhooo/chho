function changeImage(img_name,img_src){
	document[img_name].src=img_src;
}
function changeContents(num){
	highlightMenuItem(num);
	delayAnimatedCollapseInit(num);
}

function highlightMenuItem(num){
	var homeID = document.getElementById("home");
	var backgroundID = document.getElementById("background");
	var researchID = document.getElementById("research");
	var teachingID = document.getElementById("teaching");
	var serviceID = document.getElementById("service");
	var consultingID = document.getElementById("consulting");
	
	if (num == 0){
		homeID.innerHTML = "<b>HOME</b>";
		backgroundID.innerHTML = "BACKGROUND";
		researchID.innerHTML = "RESEARCH";
		teachingID.innerHTML = "TEACHING";
		serviceID.innerHTML = "SERVICE";
		consultingID.innerHTML = "CONSULTING";
	}
	else if (num == 1){
		homeID.innerHTML = "HOME";
		backgroundID.innerHTML = "<b>BACKGROUND</b>";
		researchID.innerHTML = "RESEARCH";
		teachingID.innerHTML = "TEACHING";
		serviceID.innerHTML = "SERVICE";
		consultingID.innerHTML = "CONSULTING";
	}
	else if (num == 2){
		homeID.innerHTML = "HOME";
		backgroundID.innerHTML = "BACKGROUND";
		researchID.innerHTML = "<b>RESEARCH</b>";
		teachingID.innerHTML = "TEACHING";
		serviceID.innerHTML = "SERVICE";
		consultingID.innerHTML = "CONSULTING";
	}
	else if (num == 3){
		homeID.innerHTML = "HOME";
		backgroundID.innerHTML = "BACKGROUND";
		researchID.innerHTML = "RESEARCH";
		teachingID.innerHTML = "<b>TEACHING</b>";
		serviceID.innerHTML = "SERVICE";
		consultingID.innerHTML = "CONSULTING";		
	}
	else if (num == 4){
		homeID.innerHTML = "HOME";
		backgroundID.innerHTML = "BACKGROUND";
		researchID.innerHTML = "RESEARCH";
		teachingID.innerHTML = "TEACHING";
		serviceID.innerHTML = "<b>SERVICE</b>";
		consultingID.innerHTML = "CONSULTING";			
	}
	else if (num == 5){
		homeID.innerHTML = "HOME";
		backgroundID.innerHTML = "BACKGROUND";
		researchID.innerHTML = "RESEARCH";
		teachingID.innerHTML = "TEACHING";
		serviceID.innerHTML = "SERVICE";
		consultingID.innerHTML = "<b>CONSULTING</b>";			
	}
	else{
		homeID.innerHTML = "HOME";
		backgroundID.innerHTML = "BACKGROUND";
		researchID.innerHTML = "RESEARCH";
		teachingID.innerHTML = "TEACHING";
		serviceID.innerHTML = "SERVICE";
		consultingID.innerHTML = "CONSULTING";			
	}
}

function setCollapseableScript(){

		animatedcollapse.addDiv('resrch_1', 'fade=1');
		animatedcollapse.addDiv('resrch_2', 'fade=1');
		animatedcollapse.addDiv('resrch_3', 'fade=1');
		animatedcollapse.addDiv('resrch_4', 'fade=1');
		animatedcollapse.init();
		
}

function setCollapseScript_research(){
		animatedcollapse.addDiv('res_one', 'fade=1');
		animatedcollapse.addDiv('res_two', 'fade=1');
		animatedcollapse.addDiv('res_three', 'fade=1');
		animatedcollapse.addDiv('res_four', 'fade=1');
		animatedcollapse.addDiv('res_five', 'fade=1');
		animatedcollapse.addDiv('res_six', 'fade=1');
		animatedcollapse.init();
		
		animatedcollapse.hide('res_two');
		animatedcollapse.hide('res_three');
		animatedcollapse.hide('res_four');
		animatedcollapse.hide('res_five');
		animatedcollapse.hide('res_six');
}

function setCollapseScript_service(){
		animatedcollapse.addDiv('serv_one', 'fade=1');
		animatedcollapse.addDiv('serv_two', 'fade=1');
		animatedcollapse.addDiv('serv_three', 'fade=1');
		animatedcollapse.addDiv('serv_four', 'fade=1');
		animatedcollapse.init();
		
		animatedcollapse.hide('serv_two');
		animatedcollapse.hide('serv_three');
		animatedcollapse.hide('serv_four');

}

function delayAnimatedCollapseInit(num){
	if (num == 1){
		setTimeout("setCollapseScript_service()", 500);
	}
	else if (num == 2){
		setTimeout("setCollapseScript_research()", 500);
	}
	else{
	
	}
}
