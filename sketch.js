//Create variables here
var dog,happyDog,dogImg,happyDogImg;
var database;
var foodS,foodStock;
var database;

function preload(){
	//load images here
 dogImg= loadImage("images/dogImg.png");
 happyDogImg=loadImage("images/dogImg1.png");
}

function setup() {
	database=firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);
  createCanvas(500, 500);
  dog= createSprite(250,250,5,5);
  dog.addImage(dogImg);
  dog.scale=0.2; 
  
}


function draw() {  
background(46,139,87);
 
if(foodS!==undefined){
  if (keyWentDown(UP_ARROW)){
    
    writeStock(foodS);
    if(foodS>0){
      dog.addImage(happyDogImg);
    }
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }
  textSize(20);
  fill("red");
  text("press Up arrow key to feed the dog", 100,50);

  text("food remaining : "+ foodS, 180,100);
  drawSprites();
}

  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
if(x<=0){
  x=0;
}
else{
  x=x-1;
}
database.ref("/").update({
  food : x
})
}




