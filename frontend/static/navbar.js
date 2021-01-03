function toggleFullNavigationBar(){
	document.getElementById("nav").classList.toggle("active")

	Array.prototype.forEach.call(document.getElementsByClassName("hamburger"), function(el) {
	    el.classList.toggle("active")
	});

}

