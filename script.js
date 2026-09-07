var context = paper.getContext('2d');
paper.width = window.innerWidth;
paper.height = window.innerHeight;
context.beginPath();
context.moveTo(200, 100);
context.arc(200, 100, 100, 0, Math.PI * 2, false);
context.fillStyle = 'red';
context.fill();
function loop() {
var paper = document.getElementById('paper');
if (typeof paper.getContext === 'undefined') {return;}
var context = paper.getContext('2d');
paper.width = window.innerWidth;
paper.height = window.innerHeight;
var width = paper.width;
var height = paper.height;
var x = 0;
var speed = 5;
(function render() {
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(x, 150,50, 0, Math.PI * 2, false);
    context.fillStyle = 'red';
    context.fill();
    if (x > paper.width + 50) {
        x = -50;
    } else {
        x += speed;
    }
    requestAnimationFrame(render);
    })();
}
    loop();
