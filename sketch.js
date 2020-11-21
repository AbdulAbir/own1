var fighter,fighterImg;
var image1


function preload()
{
//  fighterImg =createImg("fighter.gif");
fighterImg = loadAnimation("Capture7.PNG","Capture8.PNG","Capture9.PNG","Capture10.PNG")
 image1 = loadAnimation("Capture24.PNG","Capture25.PNG","Capture26.PNG","Capture27.PNG")
fighterImg2 = loadAnimation("Capture4.PNG","Capture5.PNG","Capture6.PNG")
  image3 = loadImage("bg.png");
   image4 = loadAnimation("Capture15.PNG");
}

function setup() {
  createCanvas(1600,800);
  fighter = createSprite(1200,200)
   fighter.addAnimation("xfty",fighterImg);
   fighter.addAnimation("kick",fighterImg2);
   fighter.addAnimation("d",image4);
   fighter.scale = 0.9;
   
  
  boss1 = createSprite(300,200);
  boss1.addAnimation("z",image1)
  boss1.scale = 1.5
  // boss1.velocityX = -2
  // boss1.velocityY = 2
}

function draw() {
  background(image3); 
//  fighterImg.position(900,40);
 edges = createEdgeSprites();
  fighter.bounceOff(edges);
  boss1.bounceOff(edges);
  if (keyWentDown("k")) 
  { 
    fighter.changeAnimation("kick",fighterImg2);
    // fighter.scale = 0.7
  } 
    if(keyWentUp("k") ){
      fighter.changeAnimation("xfty",fighterImg);
      // fighter.scale = 0.7;
   }
   
   if(keyDown("left"))
   {
     fighter.velocityX = -3
   }else{
     fighter.velocityX = 0
   }
  if(keyWentDown("down"))
   {
     fighter.changeAnimation("d",image4);
     
   } 
   if(keyWentUp("down") ){
      fighter.changeAnimation("xfty",fighterImg);
      // fighter.scale = 0.7;
   }
  
  
  drawSprites();
}

