
var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    size(700,500);
   
    noStroke();
// the beautiful blue sky
background(82, 222, 240);

// the starting size for the sun
var sunSize = 30; 

draw = function() {
     sunSize = sunSize+1;
 // The sun, a little circle on the horizon
fill(255, 204, 0);
ellipse(400, 298, sunSize, sunSize);

// The land, blocking half of the sun
fill(76, 168, 67);
rect(0, 300, 700, 300);
};
};
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 