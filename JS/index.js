let toggler=0;
function displaySmallMenu(){
	if(toggler===0){
		const menu=document.querySelector("#slideDownMenu");
		menu.classList.remove("displayFalse");
		menu.classList.add("displayTrue");
		toggler=1;
		console.log(menu.classList);
	}
	else if(toggler===1){
		const menu=document.querySelector("#slideDownMenu");
		menu.classList.remove("displayTrue");
		menu.classList.add("displayFalse");
		toggler=0;
		console.log(menu.classList);
	}
}