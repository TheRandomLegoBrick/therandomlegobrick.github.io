var canvas = document.getElementById('headerBG');
var ctx = canvas.getContext('2d')

ctx.canvas.width = window.innerWidth
ctx.canvas.height = 200;

var stars = [];
for(var i = 0; i < 20; i++){
	stars.push([Math.random()*window.innerWidth, Math.random()*100])
}

var c = 0;
function drawHeader(){
	c += 0.05;
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, window.innerWidth, 200)

	for(var i = 0; i < stars.length; i++){
		let x = Math.cos(c+i)*30;
		let y = Math.sin(c+i*5)*10;

		ctx.fillStyle = "rgba(255, 255, 150)";
		ctx.beginPath()
		ctx.arc(stars[i][0]+x, stars[i][1]+y, 3, 0, Math.PI*2, true)
		ctx.fill()

		ctx.fillStyle = "rgba(255, 255, 150, 0.3)";
		ctx.beginPath()
		ctx.arc(stars[i][0]+x, stars[i][1]+y, 10, 0, Math.PI*2, true)
		ctx.fill()
	}
}