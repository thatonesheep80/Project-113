function preload(){}

function setup()
{
    canvas = createCanvas(740, 480);
    canvas.position(200, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 170, 100, 400, 300);

    fill(120, 142, 255);
    stroke(82, 110, 255);

    rect(30, 75, 20, 330);
    rect(698, 75, 20, 330);

    fill(104, 3, 140);
  stroke(138, 3, 140);

  circle(705, 50, 70);
  circle(637, 50, 65);
  circle(574, 50, 60);
  circle(515, 50, 55);
  circle(462, 50, 50);
  circle(415, 50, 45);
  circle(372, 50, 40);
  circle(330, 50, 45);
  circle(281, 50, 50);
  circle(230, 50, 55);
  circle(174, 50, 60);
  circle(110, 50, 65);
  circle(41, 50, 70);

  circle(705, 435, 70);
  circle(637, 435, 65);
  circle(574, 435, 60);
  circle(515, 435, 55);
  circle(462, 435, 50);
  circle(415, 435, 45);
  circle(372, 435, 40);
  circle(330, 435, 45);
  circle(281, 435, 50);
  circle(230, 435, 55);
  circle(174, 435, 60);
  circle(110, 435, 65);
  circle(41, 435, 70);

  
}

function take_snapshot()
{
    save("Picture.png");
}
 
