var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext('2d');

ctx.fillStyle='#fe6837';
ctx.fillRect(170,170,70,70);


ctx.fillStyle='#8ec131';
ctx.fillRect(250,170,70,70);


ctx.fillStyle='#00b5ee';
ctx.fillRect(170,250,70,70)


ctx.fillStyle='#ffc236';
ctx.fillRect(250,250,70,70)


ctx.beginPath();
ctx.arc(250,250,200,0,6.6);
ctx.stroke();