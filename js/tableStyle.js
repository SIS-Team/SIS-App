function tableStyle(){
	if(os.indexOf("Linux") != -1){
		
		if(screen.width < screen.height){
			document.getElementById("stundenplan").style.fontSize = "7pt";
		}
		else
			document.getElementById("stundenplan").style.fontSize = "auto";
	}
}