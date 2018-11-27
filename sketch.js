
var myLoc;
var myMap;
var canvas;
var mappa= new Mappa('MapboxGL', 'pk.eyJ1IjoiYXJpYW5uYWxhY3JvY2UiLCJhIjoiY2pvcXhsYzQxMDlzODN3cGRrMXM4NTg0NyJ9.KVIO20BDkit7sZPgrxyeAQ');

var MyImage;
var wafflesLat=50.854954;
var wafflesLong=4.3051785;

var waffles = {
  lat: wafflesLat,
  lng: wafflesLong,
}

var MyImage1;
var rollLat=45.9342939;
var rollLong=133.6260981;

var roll = {
  lat: rollLat,
  lng: rollLong,
}

var MyImage2;
var budinoLat=41.1112919;
var budinoLong=16.7416517;

var budino = {
  lat: budinoLat,
  lng: budinoLong,
}

var MyImage3;
var donutLat=62.3915369;
var donutLong=-110.8225802;

var donut = {
  lat: donutLat,
  lng: donutLong,
}

var MyImage4;
var pancakeLat=41.8497705;
var pancakeLong=-83.1901944;

var pancake = {
  lat: pancakeLat,
  lng: pancakeLong,
}

var MyImage5;
var cornflakesLat=57.6677015;
var cornflakesLong=-9.1705585;

var cornflakes = {
  lat: cornflakesLat,
  lng: cornflakesLong,
}

var options = {
  lat: 45.5038455,
  lng: 9.1512322,
  zoom: 1.6,
  style: 'mapbox://styles/ariannalacroce/cjot413454cr62smefgojpu1y',
  pitch: 15
}

function preload(){
  myImage = loadImage('./assets/waffles.png');
  myImage1 = loadImage('./assets/rollcake.png');
  myImage2 = loadImage('./assets/budino.png');
  myImage3 = loadImage('./assets/donut.png');
  myImage4 = loadImage('./assets/pancake.png');
  myImage5 = loadImage('./assets/cornflakes.png');

  myLoc = getCurrentPosition();
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  angleMode(DEGREES);
  frameRate(5);
}

function draw() {
  clear();

  var distance = calcGeoDistance(myLoc.latitude, myLoc.longitude, wafflesLat, wafflesLong, "km");
  var distance1 = calcGeoDistance(myLoc.latitude, myLoc.longitude, rollLat, rollLong, "km");
  var distance2 = calcGeoDistance(myLoc.latitude, myLoc.longitude, budinoLat, budinoLong, "km");
  var distance3 = calcGeoDistance(myLoc.latitude, myLoc.longitude, donutLat, donutLong, "km");
  var distance4 = calcGeoDistance(myLoc.latitude, myLoc.longitude, pancakeLat, pancakeLong, "km");
  var distance5 = calcGeoDistance(myLoc.latitude, myLoc.longitude, cornflakesLat, cornflakesLong, "km");

  textAlign(LEFT);
  textSize(15);
  textFont('VT323');

  push();
  textAlign(CENTER);
  text('how far are your favourite desserts origin places?', width/2, 60);
  text('- click to see their Nutrition Facts -', width/2, 560);
  pop();

  var waffles = myMap.latLngToPixel(wafflesLat,wafflesLong);
  image(myImage,waffles.x,waffles.y+random(-5,5),myImage.width/1.3, myImage.height/1.3);
  text('waffles', waffles.x+5, waffles.y-25);
  text(distance, waffles.x+5, waffles.y-10);

  var roll = myMap.latLngToPixel(rollLat,rollLong);
  image(myImage1,roll.x,roll.y+random(-5,5),myImage1.width/1.3, myImage1.height/1.3);
  text('roll cake matcha', roll.x, roll.y-25);
  text(distance1, roll.x, roll.y-10);

  var budino = myMap.latLngToPixel(budinoLat,budinoLong);
  image(myImage2,budino.x,budino.y+random(-5,5),myImage2.width/1.3, myImage2.height/1.3);
  text('budino', budino.x+15, budino.y-25);
  text(distance2, budino.x+15, budino.y-10);

  var donut = myMap.latLngToPixel(donutLat,donutLong);
  image(myImage3,donut.x,donut.y+random(-5,5),myImage3.width/1.3, myImage3.height/1.3);
  text('donut', donut.x, donut.y-25);
  text(distance3, donut.x, donut.y-10);

  var pancake = myMap.latLngToPixel(pancakeLat,pancakeLong);
  image(myImage4,pancake.x,pancake.y+random(-5,5),myImage4.width/1.3, myImage4.height/1.3);
  text('pancake', pancake.x, pancake.y-25);
  text(distance4, pancake.x, pancake.y-10);

  var cornflakes = myMap.latLngToPixel(cornflakesLat,cornflakesLong);
  image(myImage5,cornflakes.x,cornflakes.y+random(-5,5),myImage4.width/1.3, myImage4.height/1.3);
  text('sugar cornflakes', cornflakes.x, cornflakes.y-25);
  text(distance5, cornflakes.x, cornflakes.y-10);

  if (mouseIsPressed) {
    push()
    fill(0,0,255,70);
    rect(0,0,windowWidth, windowHeight);
    pop();

    push()
    textAlign(RIGHT);
    fill(0,0,255);
    text('167 calories', budino.x-10, budino.y+20);
    text('4.2 g fat', budino.x-10, budino.y+30);
    text('29.1 g carbohydrates', budino.x-10, budino.y+40);
    text('3.3 g protein', budino.x-10, budino.y+50);

    text('101 calories', pancake.x-10, pancake.y+20);
    text('0.7 g fat', pancake.x-10, pancake.y+30);
    text('20.9 g carbohydrates', pancake.x-10, pancake.y+40);
    text('2.6 g protein', pancake.x-10, pancake.y+50);

    text('257 calories', donut.x-10, donut.y+10);
    text('14.7 g fat', donut.x-10, donut.y+20);
    text('28.6 g carbohydrates', donut.x-10, donut.y+30);
    text('3 g protein', donut.x-10, donut.y+40);

    text('157 calories', cornflakes.x-10, cornflakes.y+10);
    text('10.4 g fat', cornflakes.x-10, cornflakes.y+20);
    text('15.9 g carbohydrates', cornflakes.x-10, cornflakes.y+30);
    text('1.7 g protein', cornflakes.x-10, cornflakes.y+40);

    text('216 calories', roll.x-10, roll.y+20);
    text('14.1 g fat', roll.x-10, roll.y+30);
    text('43.6 g carbohydrates', roll.x-10, roll.y+40);
    text('4.9 g protein', roll.x-10, roll.y+50);

    text('382 calories', waffles.x-10, waffles.y+20);
    text('21.6 g fat', waffles.x-10, waffles.y+30);
    text('38 g carbohydrates', waffles.x-10, waffles.y+40);
    text('8.7 g protein', waffles.x-10, waffles.y+50);
    pop();

} else {}

}
