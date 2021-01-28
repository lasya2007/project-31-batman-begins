const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var drops=[];
var maxDrops=100;
var rain;
var boy;
var thunder,img1,img2,img3,img4;
var thunderCreated;

function preload(){
  img1=loadImage("thunderbolt/1.png");  
  img2=loadImage("thunderbolt/2.png");  
  img3=loadImage("thunderbolt/3.png");  
  img4=loadImage("thunderbolt/4.png");    
}

function setup(){
   createCanvas(600,600);

   engine=Engine.create();
   world=engine.world;
   Engine.run(engine);

  if(frameCount%150===0){
   for(var i=0;i<maxDrops;i++){
     drops.push(new Drop(random(0,600),random(0,600)));
     
   }
  }

  boy=new Umbrella(300,300);
   
}

function draw(){
    background("black");
    Engine.update(engine);

    var rand=Math.round(random(1,4));
   if(frameCount%80===0){
     thunder=createSprite(random(10,590),random(10,30),10,10);
     thunderCreated=frameCount;
     switch(rand){
       case 1:thunder.addImage(img1);
       break;
       case 2:thunder.addImage(img2);
       break;
       case 3:thunder.addImage(img3);
       break;
       case 4:thunder.addImage(img4);
       break;
       default:break;
     }
     thunder.scale=random(0.3,0.6);
   }

   if(thunderCreated+10===frameCount && thunder){
     thunder.destroy();
   }

   for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
   }

   boy.display();

   
   drawSprites();
}   

