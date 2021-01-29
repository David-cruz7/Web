var sketchProc = function(processingInstance){
  with(processingInstance){
    size(400,400)

    var num = random(0,4);
  var answer = round(num);
  background(102, 255, 0);
  fill(8, 8, 8);
  ellipse(207, 200, 356, 350);
  fill(60, 0, 255);
  triangle(200, 104, 280, 280, 120, 280);
  fill(0, 0, 0);
    
    var f = createFont("ELLA TE AMA");
    textFont(f);
    text("PRESIONA Y VERAS LA MAGIA",2 , 22);
    mouseClicked= function (){
      if(mouseClicked ){
        num = random(0, 4);
          answer = round(num);
          fill(8, 8, 8);
        ellipse(207, 200, 356, 350);
        fill(60, 0, 255);
      triangle(200, 104, 280, 280, 120, 280);
        textSize(15);
                if (answer === 0) {
                   textAlign(CENTER,CENTER);
                   fill(255, 255, 255);
               text("NO DEJES DE PRESIONAR", 200, 200);
                }else if (answer === 1) {
                    textAlign(LEFT, CENTER);
                    fill(255, 255, 255);
                text("TU LA HACES FELIZ",176,200);
                }else if (answer === 2) {  
                    textAlign(CENTER, CENTER);
                    fill(255, 255, 255);
                text("FELICIDADES",200,200); 
                }else if (answer === 3) {
                    fill(255, 255, 255);
                    textAlign(LEFT, CENTER);
                    text("VALORATE",162,200);
                }else if (answer === 4) {
                    fill(255, 255, 255);
                    textAlign(LEFT, CENTER);
                    text("MIRA ALFRENTE",178,200 );
                }
    }
  };
}
};

var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);