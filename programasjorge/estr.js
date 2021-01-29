
var xPos = 200;
var yPos = 200;
var x =  200;
var y =  200;
var ballwidth = 200;
var ballheight = 200;

var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    size(700,500);
   
    draw = function() {
      background(31, 115, 111);
      
      fill(208, 255, 0);
      ellipse(xPos, yPos, 10, 10);
      
      fill(208, 255, 0);
      ellipse(x, y, 10, 10);
      
      xPos = xPos + 1;
      yPos = yPos - 2;
      x = x + 2;
      y = y + 4;
      ballwidth = ballwidth * 99/100;
      ballheight = ballheight * 99/100;
      
     
  };
  
};
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 