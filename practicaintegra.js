function Area(ancho,alto) {
    return ancho * alto;
 }
 
 function perimetros(ancho, alto) {
    return 2 * (ancho + alto);
 }
 
 
 var ancho = 5;
 var alto = 10;
 

 var area = Area(ancho, alto);
 var perimetro = perimetros(ancho, alto);
 
 
 console.log(" el Area del rectangulo es :" + area);
 console.log("el Perimetro del rectangulo es :" + perimetro);