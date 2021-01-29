var spider;
var bloques;
var ventana;
var cerezo;
function drawAfter(pro,callback){
  bloques = pro.loadImage("./img/block.png");
  spider = pro.loadImage("./img/grass.png");
  ventana = pro.loadImage("./img/ventana.png");
  cerezo = pro.loadImage("./img/cerezo.png");
  
}


var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    drawAfter(processingInstance,image);
    size(700,500);
   
    background(23, 86, 212);

    fill(214, 23, 23);
   triangle(350, 28, 500, 200, 200, 200);
     for(var j = 0 ;j < 7; j++){
         image(spider,j*59,320,57,86);
      }
   fill(178, 211, 219);
   rect(210, 200, 280, 207);
     for(var i = 2 ; i < 9; i++){
         for(var j =5;j < 11; j++) {
             image(bloques,i*34,j*30,57,56);
         }
     }
      for(var j = 2; j < 6; j++){
        if(j % 2 === 0){
          image(ventana,j*59,220,57,56);
        }
     }
   fill(214, 23, 23);
   rect(340, 330, 40, 77);
      for(var j = 2; j < 6; j++){
          if(j % 2 === 0){
             image(cerezo,j*59,320,57,56);
         
          }
        
       }
   
   
    

  }
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 