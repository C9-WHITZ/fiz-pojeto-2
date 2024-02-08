let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d")
let color = "blue";
let largura = 2;

let mouseX;
let mouseY;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=largura;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=largura;
ctx.arc(300,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=largura;
ctx.arc(400,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=largura;
ctx.arc(250,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=largura;
ctx.arc(350,250,40,0,2*Math.PI);
ctx.stroke();