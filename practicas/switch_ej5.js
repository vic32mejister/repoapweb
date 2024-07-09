//realizar un programa que realice operaciones basicas matematicas, segun el operador proporcionado
//+ - * /
//conciderar que division con 0 marque error
let n1=1;
let n2=0;
let n="+";  ////// cambiar el operador
  
switch (n) {
case "+":
    console.log(+n1 +" "+n +" "+n2 +" ="+(n1+n2));
break;
case "-":
    console.log(+n1 +" "+n +" "+n2 +" ="+(n1-n2));
break;
case"*":
console.log(+n1 +" "+n +" "+n2 +" ="+(n1*n2));
break;
case "/":
    {
       switch (n2)
       {
        case 0:
        console.log("error");
        break;
        default:
        console.log(+n1 +" "+n +" "+n2 +" = "+(n1/n2));
        break;
       } 

    }
    break;
default:
         console.log("Error");
         break;
}