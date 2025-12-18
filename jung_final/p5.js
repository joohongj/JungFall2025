let x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 20;

function setup() {
  const canvas = createCanvas(900, 508);
  canvas.position(70, 380);
  strokeWeight(50.10);
  stroke(255, 100);
}

function draw() {
  clear();

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
  x = mouseX - cos(angle1) * segLength;
  y = mouseY - sin(angle1) * segLength;

  segment(x, y, angle1);
  ellipse(x, y, 10, 10);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
