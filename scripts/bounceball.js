//create the board and the drawing context
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext("2d");

//initial ball position
var bx = 250; //position of the ball center
var by = 200;
var bWid = 20;
var bHei = 20;

//ball dynamics
var dx = 1;   //direction of motion
var dy = 1;
const FPS = 45;

//refreshes the screen every 1/FPS seconds
setInterval(update, 1000/FPS);

function update(){
    //draws a black rectangle onto the screen, with top-left corner at (0, 0) size 250 x 200
    context.fillStyle = "#000000";
    context.fillRect(0, 0, 500, 400);

    //blits a yellow ball onto the screen
    context.fillStyle = "#FFFF00";
    context.fillRect(bx - bWid/2, by - bHei/2, bWid, bHei);
    
    //bouncing off the side walls
    if(bx - bWid/2 + dx > 500 - 20 || bx - bWid/2 + dx < 0){
        dx = -dx;
    }

    //bouncing off top and bottom walls
    if(by - bHei/2 + dy > 400 - 20 || by - bHei/2 + dy < 0){
        dy = -dy;
    }

    bx = bx + dx;
    by = by + dy;
}

