var dog, dogimg, happyDog, database, foodS, foodStock;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(700,800);
  dog = createSprite(250,250,20,10);
  dog.addImage(dogimg);
  dog.scale = 0.5;
}


function draw() {  
  background(46,139,87);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

  if(keyWentDown(UP_ARROW)) {
    dog.addImage(happyDog);
    writeStock(foodS);
  
  }

  drawSprites();
  fill("black");
  text("Press arrow key to feed the dog", 100,50);
  console.log(foodStock);

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    food: x
  })
}

function readStock(data){
  foodS = data.val();

}



