var gameState="begin"
var mazeImg,bgImage;


function preload(){
mazeImg=loadImage("maze.jpg");
bgImage=loadImage("wonderland.jpg");
bgImage.scale=0.5
}

function setup(){
createCanvas(700,600);



}

function draw(){
  background(bgImage)
  if (gameState==="begin"){
  textSize(40);
  fill("yellow");
  text("Instructions",300,80);
  textSize(25);
  fill("lightblue")
  text("To reach your home",20,150)
  text("First,reach the end point",20,200)
  text("of the maze.",20,250)
  stroke(20)
  fill("green")
  text("Press the spaceBar to start playing the game",20,350)
  }
}
  

  if (keyDown("SPACE")){
    gameState="maze";
  }

  if(gameState=== "maze")
  {
    background(mazeImg)

   
    
  }
 
  
   
 
