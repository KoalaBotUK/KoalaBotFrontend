function toggleFullNavigationBar(){
	document.getElementById("nav").classList.toggle("active")

	Array.prototype.forEach.call(document.getElementsByClassName("hamburger"), function(el) {
	    el.classList.toggle("active")
	});

}

function toggleDarkMode(){
	if(document.documentElement.getAttribute("data-theme") == "dark"){
		document.documentElement.setAttribute('data-theme', 'light');
	}else{
		document.documentElement.setAttribute('data-theme', 'dark');
	}
}
