var scrabledElements = document.getElementsByClassName("scrabled")
var sidebar = document.getElementById("sidebar")
function lerp(value1, value2, amt) {
	return ((value2 - value1) * amt) + value1;
}
const chars = "ΑαΒβΓγΔδΕεΖζΗηΘθΙιΚκΛλΜμΝνΞξΟοΠπΡρΣσ/ςΤτΥυΦφΧχΨψΩω"
var sidebarHover = false

function scrabledText(length){
	let floor = Math.floor
	let random = Math.random
	let string = ""

	for(let i = 0; i < length; i++){
		string += chars[floor(random()*chars.length)]
	}

	return string
}

var count = 0;
var sbpos = 0;
var sin = Math.sin;
var bounce = 0;
var mainloop = window.setInterval(() => {
	drawHeader()
	
	if(count%10 === 0){
		for(let i = 0; i < scrabledElements.length; i++){
			scrabledElements[i].innerText = scrabledText(7)
		}
	}

	if(sidebarHover){
		sbpos = lerp(sbpos, -50 + sin(count*0.3)*bounce, 0.2);
	}else{
		sbpos = lerp(sbpos, -375 + sin(count*0.3)*bounce, 0.2);
	}

	bounce = Math.max(0, lerp(bounce, -1, 0.1));
	sidebar.style.left = sbpos+"px";

	count ++;
}, 1000/60)

sidebar.addEventListener('mouseover', (event) => {
	if(!sidebarHover){
		bounce = 200;
		sidebarHover = true;
		count = 0;
	}
})

sidebar.addEventListener('mouseleave', (event) => {
	sidebarHover = false;
	bounce = 200;
	count = 5;
})