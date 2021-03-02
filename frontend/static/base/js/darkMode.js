var updateDarkModeOnToggle = false;

function toggleDarkMode(){
	if(updateDarkModeOnToggle){
		if(document.documentElement.getAttribute("data-theme") == "dark"){
			document.documentElement.setAttribute('data-theme', 'light');
			setCookie("darkmode","false",30);
		}else{
			document.documentElement.setAttribute('data-theme', 'dark');
			setCookie("darkmode","true",30);
		}
	}
}

function loadDarkmode(){
	if(getCookie("darkmode") == "true"){
		document.documentElement.setAttribute('data-theme', 'dark');
	}
}


function checkDarkmodeToggle(){
	if(getCookie("darkmode") == "true"){
		document.getElementById("darkmodeToggle").checked = true;
	}
	setTimeout(function(){
	 	document.getElementById("darkmodeAnimate").classList.remove("no-animation");
	}, 100);
	document.getElementById("darkmodeToggle").disabled = false;
	updateDarkModeOnToggle = true;
}