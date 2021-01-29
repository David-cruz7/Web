var sketchProc = function(processingInstance) {

  with (processingInstance) {
    
    
    size(700,500);
   
    
    background(219, 169, 116);
var book = [
    {
      title: "SISTEMA SOLAR",
      stars: 3,
      pag:"pág"+30
    },
    {
        title: "POEMAS",
        stars: 4,
        pag:"pág"+56
    },
    {
        title: "MEXICO",
        stars: 1,
        pag:"pág"+34
    }
    
];

var book2=[
    {
         title: "EL AMOR DE DOS ",
        stars: 5,
        pag:"pág"+43
    },
    {
         title: "MACARIO",
        stars: 4,
        pag:"pág"+45
    },
    { title: "MI VIDA VELLA",
       stars: 5,
       pag:"pág"+80
        
    }
      ];
      var book3=[
    {
         title: "EL ARBOL DE LA ORCA",
        stars: 2,
        pag:"pág"+60
    },
    {
         title: "EL PRINCIPITO",
        stars: 3,
        pag:"pág"+70
    },
    { title: "LA VUELTA AL MUNDO EN 80 DIAS",
       stars: 5,
       pag:"pág"+50
        
    }
      ];

// draw shelf


for(var j = 0,k = 1; j < book.length ; j++ , k++ ){
       fill(89, 101, 125);
       rect(0, 120*k, width, 10);
       fill(201, 116 * j, 60);       
       rect(150+j*130, 20, 90, 100);
       fill(0, 0, 0);
       fill(201, 116 * j, 60);
       rect(150+j*130, 138, 90, 100);
       fill(0, 0, 0);
       fill(201, 116 * j, 60);
       rect(150+j*130, 257, 90, 100);
       fill(0, 0, 0);
     
       text(book[j].title, 170 + j * 130, 29, 70, 100);
       text(book2[j].title, 170 + j * 130, 168, 70, 100);
       text(book3[j].title, 170 + j * 130, 275, 70, 100);
       text(book[j].pag, 170 + j * 130, 60, 70, 100);
       text(book2[j].pag, 170 + j * 130, 200, 70, 100);
       text(book3[j].pag, 170 + j *130, 326, 70, 100);
       
       
   



  }
}
};

var canvas = document.getElementById("canvas");
 var processing = new Processing(canvas, sketchProc); 