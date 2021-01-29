
var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    size(700,500);
   
    noStroke();
    var leftX = 130;
    var rightX = 311;
    var sunRadius = 100;
    
    draw = function() {
        background(184, 236, 255);
        fill(255, 170, 0);
        ellipse(200, 100, sunRadius, sunRadius);
        // clouds 
        fill(255, 255, 255);
        // left cloud
        ellipse(leftX, 150, 126, 97);
        ellipse(leftX+62, 150, 70, 60);
        ellipse(leftX-62, 150, 70, 60);
        // right cloud
        ellipse(rightX, 100, 126, 97);
        ellipse(rightX+62, 100, 70, 60);
        ellipse(rightX-62, 100, 70, 60);
        leftX -= 1;
        rightX +=1;
        sunRadius+=2;
    };
};
};
var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 