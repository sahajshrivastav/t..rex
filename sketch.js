var trex, trexRunning;
var ground, invisibleGround, groundImage;

function preload() {
  trexRunning = loadAnimation("trex1.png", "trex2.png", "trex3.png");
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trexRunning);
  trex.scale = 0.5;
  trex.x = 50

  //create a ground sprite and add image to it
  ground = createSprite(200, 180, 400, 20);
  ground.addImage("ground", groundImage);

  //set ground x position to center of the canvas and add negative velocity
  ground.x = ground.width / 2;
  ground.velocityX = -4;

  //creating invisible ground
  // Hint: Checkout Step 1 image inside screenshots folder
  

}

function draw() {
  background(220);

  // print the ground x position inside the console window
  console.log(ground.x)

  //jump when the space button is pressed and add aditional condition
  //Hint : Checkout step 3 image inside screenshots folder
  if (keyDown("space") ) {
    trex.velocityY = -12;
  }

  // Add Gravity
  trex.velocityY = trex.velocityY + 0.8;

  // Recreating ground from the center of the canvas
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }


  //stop trex from falling down
  //Hint : Checkout step 2 image inside screenshots folder
  trex.collide(ground)


  drawSprites();
}
