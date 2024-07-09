//switch 
//realizar un programa que realice el descuento de una compra dependiendo de los articulos comprados
//6-10   descuento 5%
//11- 20       10%
//>20          15%
//menos de 5 articulos no alcanza descuento
let subtotal=100;
let descuento=0;
let n=21;  ////// cambiar el valor de la variable n= numero de articulos
if(n>=6&&n<=10){
descuento=5;
}
else if (n>=11&&n<=20){
descuento=10;
}
else if (n>20){
descuento=15;
}
else{
        descuento=0;
}
switch (descuento) {
case 5:
    console.log("subtotal: "+subtotal +" - 5 % descuento ");
    console.log("Total: "+(subtotal-(subtotal*.05) ) );
break;
case 10:
    console.log("subtotal: "+subtotal +" - 10 % descuento ");
    console.log("Total: "+(subtotal-(subtotal*.1) ) );
break;
case 15:
    console.log("subtotal: "+subtotal +" - 15 % descuento ");
    console.log("Total: "+(subtotal-(subtotal*.15) ) );
    break;
default:
         console.log("Error");
break;
    }