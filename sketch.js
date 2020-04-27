let redSlider,
  greenSlider,
  blueSlider;

function setup() {
  createCanvas(500, 500);

  redSlider   = createSlider(0, 255);
  greenSlider = createSlider(0, 255);
  blueSlider  = createSlider(0, 255);
}

function draw() {
  const red = redSlider.value();
  const green = greenSlider.value();
  const blue = blueSlider.value();

  fill(red, green, blue);
  ellipse(50, 50, 80, 80);
}
