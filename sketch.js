function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed){
    
    fill(random(mouseX));
  ellipse(mouseX, mouseY, 100, 100);
  }
}
