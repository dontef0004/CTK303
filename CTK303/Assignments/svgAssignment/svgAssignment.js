let img1, img2, bgImg;
function preload() {

img1 = loadSVG("assets/purr.svg");
img2 = loadSVG("assets/purr_2.svg");
}
function setup() {
createCanvas(1000, 1800, SVG);


 bgImg = img1;

  }

  function draw() {

    image(bgImg,0,0,750,750);


    }
    function mousePressed(){
      // background(0);
      clear();
      bgImg = img1

    }

    function mouseReleased(){
      // background(0);
      clear();
      bgImg = img2;
  }
