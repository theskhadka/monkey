var bananaImage, obstacleImage, obstacleGroup, background, score;

function preload() {
  background = loadImage("jungle.png");
  
  player = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.ping");
}

function setup() {
  background = createSprite(200, 0, 400, 400);
  background = addImage("background", background);
  background.x = background.width /2;
  background.velocityX = -2;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  player = createSprite(50,180,20,50);
  player.addAnimation("player", player);
  player.scale = 0.1;
  
  createCanvas(400, 400);
}

function draw() {
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+20, 500, 50);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (foodGroup.isTouching(player)) {
    score = score+2;
    foodGroup.destroyEach();
  }
  
  switch(score) {
    case 10: player.scale = 0.12;
      break;
    case 20: player.scale = 0.14;
      break;
    case 30: player.scale = 0.16;
      break;
    case 40: player.scale = 0.18;
      break;
    default: break;
  }
  
  if (obstacleGroup.isTouching(player)) {
    player.scale = 0;
  }
  
  drawSprites();
}