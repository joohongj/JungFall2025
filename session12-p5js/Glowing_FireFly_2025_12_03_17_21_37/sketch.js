function setup() {
  createCanvas(800, 500);

}

let glowSize = 0;

function draw() {
     background("#00003F");
  
  
  tree(300, 400, 350, 400);
  tree(100, 500, 400, 350);
  tree(600, 450, 300, 500);
  tree(790, 500, 400, 300);


  fill("#F0E68C");
  stroke("#191970");
//   wanna add some a bit of glow around the each circle
  circle(20, 400, 9);
  circle(70, 250, 20);
  circle(90, 210, 6);
  circle(150, 280, 25);
  circle(350, 320, 15);
  circle(470, 220, 5);
  circle(500, 230, 8);
  circle(610, 400, 10);
  circle(654, 330, 5);
  circle(710, 260, 20);
  circle(770, 280, 7);
  circle(20, 400, 9);
  circle(40, 115, 18);
  circle(180, 230, 7);
  circle(159, 290, 11);
  circle(289, 176, 6);
  circle(746, 179, 11);
  circle(736, 175, 14);
  circle(649, 278, 8);
  circle(250, 410, 13);
  circle(523, 341, 10);
  circle(515, 222, 20);
  
  glowSize = 120 + sin(frameCount * 0.076) * 30;
  
  noStroke();
  fill("#F0E68C98"); 
  circle(mouseX, mouseY, glowSize);

  if (mouseIsPressed) fill("#F0E68C"), stroke("#F0E68C"); 
  // Wanna make the glow differently when it pressed- size, color and shape???
  else fill("#341C02"), stroke("#F0E68C");

  ellipse(mouseX, mouseY, 40, 25);
}

function tree(x, y, trunkH, crownH) {
  fill("#4B2E07");
  stroke("#4B2E07")
  rect(x - trunkH/8, y - trunkH, trunkH/4, trunkH);

  fill("#0B6623");
  stroke("#191970");
  triangle(x - crownH/2.5, y - trunkH, x + crownH/2, y - trunkH, x, y - trunkH - crownH);
}