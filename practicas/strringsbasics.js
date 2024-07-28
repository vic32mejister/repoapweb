//metodos mas usados con strings

//obtener la longitud de un string
let str_1= "hola soy un string";

console.log(str_1.length);


let slice_str_1= str_1.slice(0,4);
console.log(slice_str_1); 

let substring_str_1 = str_1.substring(0,5);
console.log(substring_str_1); 


// remplazar parte de una cadena
let cadena= ("hola mi nombre es victor");
console.log(cadena);
// solo remplaza la prmera que encuentra
console.log(cadena.replace('victor','Hugo'));

//ejemplo con texto largo

let texto_largo= "";
console.log(texto_largo.replace('','esto es texto corto'));
console.log(texto_largo.replace(/corto/i,"largo"));
