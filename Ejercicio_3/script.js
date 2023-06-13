let arreglo = [4,"dos",8,"tres",5,9,1,"cero"];

let num = prompt(`Ingrese un numero`);
num = parseInt(num);

for (let index = 0; index < arreglo.length; index++) {
      if ( isNaN (arreglo[index]) == false) {
      console.log(arreglo[index]); 
   }
    
    
}