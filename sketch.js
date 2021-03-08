var path,boy,cash,diamonds,jwellery,sword,END;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,endImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var play=1;
var end=0;
var gameState=play;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadImage("gameOver.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);



//creating boy running
boy = createSprite(70,330,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();
  
  boy.setCollider("circle",0,0,625);
  boy.debug=false;
 END=createSprite(200,200,10,10);
  END.addImage(endImg);
END.scale=0.5;
}

function draw() {

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  
  
  if(gameState===play){
 
    
    
    path.velocityY = 4;
    
    if(path.y > 400 ){
    path.y = height/2;
  }
    
    if (cashG.isTouching(boy)) {
     treasureCollection=treasureCollection+50;
      cashG.destroyEach();
  
    }
    else if (diamondsG.isTouching(boy)) {
      treasureCollection=treasureCollection+150;
      diamondsG.destroyEach();
      
    }else if(jwelleryG.isTouching(boy)) {
       treasureCollection=treasureCollection+100;
      jwelleryG.destroyEach();
      
    }
    
  
  var select_Group=Math.round(random(1,4));
  if(World.frameCount%100===0){
    if(select_Group===1){
    createCash();
    }
    else if(select_Group===2){
    createDiamonds();
    }
    else if(select_Group===3){
    createJwellery();
    }
    else if(select_Group===4){
     createSword();
    }
  
  }
    
      if(swordGroup.isTouching(boy)) {
       
       gameState=end;
        boy.destroy();
        swordGroup.destroyEach();
        cashG.destroyEach();
        jwelleryG.destroyEach();
        diamondsG.destroyEach(); 
        path.velocityY=0;
      
    }
      END.visible=false;
  }
   else if (gameState===end){
    END.visible=true;
   }
    
    
   


  


  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,150,30);

}

function createCash() {
  if (World.frameCount % 20 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 6;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 20 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 6;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 20 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 6;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 20 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 6;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}