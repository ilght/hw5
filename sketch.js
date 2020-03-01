var headx = 20
var heady = 250
var sceam
var tube = 1000
var tube2 = 1000
var tube3 = 1000
var tube4 = 1000
var tube1x = 150
var tube1y = 300
var tube2x = 150
var tube2y = -70
var tube3x = 440
var tube3y = 370
var tube4x = 440 //second tube up
var tube4y = 0 //second tube up
var mySound
var mySound2
var g = 1.005
var v = 0.994
var ball







//move head(gravity, jump)
//hitbox for head and tube
//head changes when the head hits the tube, and end the game

function preload() {
  soundFormats("mp3");
  mySound = loadSound("sound.mp3");
  mySound2 = loadSound("sound2.mp3")
}


function setup() {
  createCanvas(350, 500);
  head = loadImage('unnamed.png');
  scream = loadImage('head.png');
  tube = loadImage('tube1.png');
  tube2 = loadImage('tube2.png');
  tube3 = loadImage('tube1.png');
  tube4 = loadImage('tube2.png');
}

function draw() {
  background(143, 214, 187);
  circle(tube1x + 40, tube1y + 40, tube.width / 60)

  circle(tube2x + 40, tube2y + 180, tube2.width / 60)
  circle(tube3x + 40, tube3y + 40, tube3.width / 60)
  circle(tube4x + 40, tube4y + 180, tube4.width / 60)


  ball = circle(headx + 35, heady + 20, 32, 32)

  headA = image(head, headx, heady, head.width / 12, head.height / 12);
  tubeDown1 = image(tube, tube1x, tube1y, tube.width / 50, tube.height / 50);

  tubeUp1 = image(tube2, tube2x, tube2y, tube2.width / 50, tube2.height / 50);
  tubeDown2 = image(tube3, tube3x, tube3y, tube.width / 50, tube.height / 50);
  tubeUp2 = image(tube4, tube4x, tube4y, tube2.width / 50, tube2.height / 50);



  tube1x = tube1x - 3
  tube2x = tube2x - 3
  tube3x = tube3x - 3
  tube4x = tube4x - 3




  if (tube1x < -80) {
    tube1x = 500
    tube1y = random(300, 500)
  }

  if (tube2x < -80) {
    tube2x = 500
    tube2y = random(-70, 0)
  }

  if (tube3x < -80) {
    tube3x = 500
    tube3y = random(300, 500)
  }

  if (tube4x < -80) {
    tube4x = 500
    tube4y = random(-70, 0)
  }


  if (keyIsDown(UP_ARROW)) {
    heady = heady - 16;
    heady = heady * v
  }
  heady = heady + 5
  heady = heady * g

  if (heady > 500) {
    headA = image(scream, 20, heady, head.width / 12, head.height / 12);
    mySound.play()
    noLoop()
  }

  if (heady < 0) {
    headA = image(scream, 20, heady, head.width / 12, head.height / 12);
    mySound.play()
    noLoop()
  }



  if (dist(headx + 35, heady + 20, 16, 16) < (tube.width / 60) + 32) {
    headA = image(scream, 20, heady, head.width / 12, head.height / 12);
    mySound.play()
    noLoop()
  }
  if (dist(headx + 35, heady + 20, 16, 16) < (tube2.width / 60) + 32) {
    headA = image(scream, 20, heady, head.width / 12, head.height / 12);
    mySound.play()
    noLoop()
  }
  if (dist(headx + 35, heady + 20, 16, 16) < (tube3.width / 60) + 32) {
    headA = image(scream, 20, heady, head.width / 12, head.height / 12);
    mySound.play()
    noLoop()
  }
  if (dist(headx + 35, heady + 20, 16, 16) < (tube4.width / 60) + 32) {
    headA = image(scream, 20, heady, head.width / 12, head.height / 12);
    mySound.play()
    noLoop()
  }




}



function mousePressed() {
  mySound2.play()

}
