let paintingHeight,
  paintingWidth;

const TEXT_SIZE = 16;

let red, green, blue, count;

function setup() {
  paintingWidth = windowWidth;
  paintingHeight = windowHeight/2;

  let canvas = createCanvas(windowWidth, paintingHeight);
  canvas.parent('header');

  red = random(0, 255)
  green = random(0, 255);
  blue = random(0, 255);

  count = random(5, 30);
}

function draw() {
  fill(red, green, blue);
  noStroke();

  for(let i = 0; i <= count + 1; i++) {
    for(let j = 0; j <= count + 1; j++) {
      const ellipseWidth = paintingWidth/count;

      ellipse(ellipseWidth * i, ellipseWidth * j, ellipseWidth);
    }
  }
}
