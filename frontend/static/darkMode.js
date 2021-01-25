function toggleDarkMode(){
	if(document.documentElement.getAttribute("data-theme") == "dark"){
		document.documentElement.setAttribute('data-theme', 'light');
	}else{
		document.documentElement.setAttribute('data-theme', 'dark');
	}
}
