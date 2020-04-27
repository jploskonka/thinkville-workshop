let redSlider,
  greenSlider,
  blueSlider;

const TEXT_SIZE = 16;
const PAINTING_HEIGHT = 500;
const PAINTING_WIDTH = 500;

const sliderWithLabel = (label, x, y) => {
  text(label, x, y);

  return createSlider(0, 255)
    .position(x, y + TEXT_SIZE);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(TEXT_SIZE);

  redSlider   = sliderWithLabel("red", 30, PAINTING_HEIGHT + 50);
  greenSlider = sliderWithLabel("green", 30, PAINTING_HEIGHT + 100);
  blueSlider  = sliderWithLabel("blue", 30, PAINTING_HEIGHT + 150);
}

function draw() {
  const red = redSlider.value();
  const green = greenSlider.value();
  const blue = blueSlider.value();

  fill(red, green, blue);
  ellipse(50, 50, 80, 80);
}
