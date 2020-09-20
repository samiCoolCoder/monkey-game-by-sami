
var monkey , monkey_running
var banana ,banana_Image, obstacle, obstacleImage;
var foodGroup, obGroup;
//var score=0  ;
var ground;
var PLY=1;
var END=0;
var GameState=PLY;
var score=0;
var monkeyc;
var scora=0;


function preload(){
  
  
monkey_running=   loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banana_Image = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkeyc=loadAnimation("sprite_0.png")
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(40,326, 20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.07;
  
  ground=createSprite(400,350,900,10);
  
  ground.x=ground.width/2
  
  foodGroup=new Group()
  obGroup=new Group()
  
monkey.debug=true
  monkey.setCollider("rectangle",0,0,100,550)
  monkey.addAnimation("collide",monkeyc);
}


function draw() {
background("")
//  stroke("black");
 // textSize(20);
 // fill("black");
  //text("score: "+ score,500,50);
  
    stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time: "+ score,100,50);
  
   if(GameState===PLY)
  {
    if (frameCount%5===0)
  {
    score=score+1
  }
  
    
    ground.velocityX=-4;
    if(ground.x<0) 
      {
    ground.x=200
  }    
      
      if (keyDown("space")&&(monkey.y>320))
  {
    monkey.velocityY=-10; 
    
  }  
  
     if(monkey.isTouching(obGroup))
    {
      GameState=END;
    
      //trex.velocityY=-5
     // jump.play()
    }
    if(monkey.isTouching(foodGroup))
    {
      scora=scora+1
       foodGroup.destroyEach();
    }
     if (frameCount%100===0) 
  {
     
      obstaclea();
     fooda();
  }
   
  }
  
   if(GameState===END)
  {
   
     ground.velocityX=0;
     banana.velocityX=0;
    obGroup .collide(monkey);
     obGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
     //cloudGroup.setVelocityXEach(0);
    obGroup.setVelocityXEach(0);
     monkey.changeAnimation("collide")
  }
  
   
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground);
drawSprites() 
  text ("score "+scora,300,200)

}
   
 
 


function obstaclea(){
 obstacle=createSprite (350,326,3,3)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
 obstacle.velocityX=-3
  obstacle.lifetime=133
  obGroup.add(obstacle)
}
function fooda()
{
 banana= createSprite(350,250,3,3)
  banana.addImage(banana_Image)
   banana.scale=0.1
 banana.velocityX=-3
  banana.lifetime=133
  foodGroup.add(banana)
}




