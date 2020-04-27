let redSlider,
  greenSlider,
  blueSlider,
  countSlider;

let paintingHeight,
  paintingWidth;

const TEXT_SIZE = 16;

const sliderWithLabel = (label, x, y) => {
  text(label, x, y);

  return createSlider(0, 255)
    .position(x, y + TEXT_SIZE);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  paintingWidth = windowWidth - 20;
  paintingHeight = 600;

  textSize(TEXT_SIZE);

  redSlider   = sliderWithLabel("red", 30, paintingHeight + 50);
  greenSlider = sliderWithLabel("green", 30, paintingHeight + 100);
  blueSlider  = sliderWithLabel("blue", 30, paintingHeight + 150);
  countSlider = sliderWithLabel("count", 30, paintingHeight + 200);
}

function draw() {
  fill(250, 250, 250);
  rect(0, 0, paintingWidth, paintingHeight);

  const red = redSlider.value();
  const green = greenSlider.value();
  const blue = blueSlider.value();

  const count = countSlider.value();

  fill(red, green, blue);
  for(let i = 0; i <= count; i++) {
    for(let j = 0; j <= count; j++) {
      const ellipseWidth = paintingWidth/count;

      ellipse(ellipseWidth * i, ellipseWidth * j, ellipseWidth);
    }
  }
}
