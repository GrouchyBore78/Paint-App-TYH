var bgcolor = 'white';
var brushColor;
var col = {
    r: 0,
    g: 0,
    b: 0,
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //strokeWeight(4);
  background(bgcolor);
  brushColor = color('yellow');
   
 // col.r= random(0,255);
 // col.g= random(0,255);
 // col.b= random(0,255);
 
  setupCanvas();
}

function setupCanvas() {
 
  //Pen drop down type menu
  sel = createSelect();
  sel.position(290, 90);
  sel.option("Line (Press 'L')");
  sel.option("Dot (Press 'D')");
  sel.option("Square (Press 'Q')");
  sel.option("Triangle (Press 'T')");
  sel.option("Spots (Press 'P')");
  sel.option("Eraser (Press 'E')");
 
  //Pen Thickness slider
  slider = createSlider(1,50, 10, 1);
  slider.position(500,60);
  //slider.style('width', '180px');

  //Clear button
  button = createButton("Clear Canvas (Press 'C')");
  button.position(690, 40);
  button.mousePressed(clearBG);

  //Save button
  button = createButton("Save Canvas (Press 'S')");
  button.position(690, 80);
  button.mousePressed(SaveImage);
}



function clearBG() {
  //Clear Canvas
  fill(bgcolor);
  noStroke();
  rect(0, 200, windowWidth, windowHeight);
}

function SaveImage() {
  var to_save = get(0, 200, windowWidth, windowHeight);
  to_save.save("canvas.png");
}


function draw() {
  noStroke();
 
  //Top box
  fill('lightgrey');
  rect(0, 0, windowWidth, 200);

  //Selected color
  fill(brushColor);
  rect(140, 25, 80, 80);

  //Labels
  fill('black');
  textSize(14);
  
  textAlign(LEFT)
  text("Blue", 60, 35);
  text("Red", 60, 80);
  text("Green", 60, 130);
  text("Random\nColor", 60, 170);
  
  textAlign(CENTER)
  text("Selected\ncolor\nBOX", 180, 55);
  text("Pen Type/Eraser", 355, 50);
  text("DO NOT remain at Eraser", 355, 70);
  text("Pen Thickness\n(Slide) or ", 560, 35);
  text("Press '+' to increase\n Press '-' to decrease", 565, 100);
  
  fill('darkblue');
  textAlign(LEFT)
  text('-    Default pen color is YELLOW and pen thickness is 10.',150,150)
  text('-    Selected COLOR is displayed in the BOX.',150,170)
  text('-    Please choose your pen color, pen type, pen thickness from the menu bar above.',150,190)
  
 
  //Choosing Algorithm to draw
  if (mouseIsPressed) {
    if (mouseX <= 50) {
      if (mouseY <= 50) {
        brushColor = color(0, 0, 255);
      } else if (mouseY <= 100) {
        brushColor = color(255, 0, 0);
      } else if (mouseY <= 150) {
        brushColor = color(0, 255, 0);
      } else if (mouseY <= 200) {
        brushColor = color(random(0,255),random(0,255),random(0,255));
      }
    }
    
    if (mouseY >=200) {
          noStroke();
     
          //Line
          if (sel.value() == "Line (Press 'L')") {
          stroke(brushColor);
          strokeWeight(slider.value());
          line(pmouseX, pmouseY, mouseX, mouseY);
          }
     
          //Dot
          if (sel.value() == "Dot (Press 'D')") {
          fill(brushColor);
          ellipse(mouseX , mouseY , slider.value(), slider.value());
          }

          //Square
          if (sel.value() == "Square (Press 'Q')") {
          fill(brushColor);
          rect(mouseX, mouseY, slider.value(), slider.value());
          }

          //Triangle
          if (sel.value() == "Triangle (Press 'T')") {
          fill(brushColor);
          triangle(mouseX, mouseY, mouseX + slider.value(), mouseY + slider.value(), mouseX - slider.value(), mouseY + slider.value());
          }

          //Spots
          if (sel.value() == "Spots (Press 'P')") {
            for (i = 0; i < random(1, 10); i++) {
            //noStroke();
            fill(brushColor);
            ellipse(mouseX+ random(-10, 10) , mouseY+ random(-10, 10) , slider.value(), slider.value());
            }
          }
     
          //Eraser
           if (sel.value() == "Eraser (Press 'E')") {
           stroke(bgcolor);
           strokeWeight(slider.value());
           line(pmouseX, pmouseY, mouseX, mouseY);
          }
                 
     
    }
     
    stroke(brushColor);
         
  }

  noStroke();
 
  fill(0, 0, 255);
  rect(0, 0, 50, 50);
  fill(255, 22, 26);
  rect(0, 50, 50, 50);
  fill(0, 137, 9);
  rect(0, 100, 50, 50);
  fill(random(0,255),random(0,255),random(0,255))
  rect(0,150,50,50)
 
}


function keyPressed() {
  
  //Line
    if (key == 'l' || key == 'L') {
    sel.selected("Line (Press 'L')");
  }
 
  //Dot
    else if (key == 'd' || key == 'D') {
    sel.selected("Dot (Press 'D')");
    }
 
  //Square    
    else if (key == 'q'|| key == 'Q'){
    sel.selected("Square (Press 'Q')");
    }
 
  //Triangle  
    else if (key == 't'|| key == 'T'){
    sel.selected("Triangle (Press 'T')");
    }  
 
  //Spots
  else if (key == 'p' || key == 'P') {
    sel.selected("Spots (Press 'P')");
  }
 
  //Eraser
    else if (key == 'e' || key == 'E') {
    sel.selected("Eraser (Press 'E')");
    }
 
  //Increase pen thickness
    else if (key == '+') {
    slider.value(slider.value() + 1);
    }
 
  //Decrease pen thickness
   else if (key == '-') {
    slider.value(slider.value() - 1);
   }
     
  //Save Canvas  
    else if (key == 's' || key == 'S') {
    SaveImage();
    }
 
//Clear Canvas
    else if (key == 'c' || key == 'C') {
    clearBG();
    }

}

