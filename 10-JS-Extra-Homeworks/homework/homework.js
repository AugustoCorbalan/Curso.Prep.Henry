// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
let matriz=[];
for (let elemento in objeto){
  let array=[];
  array.push(elemento);
  array.push(objeto[elemento]);
  matriz.push(array);
}
return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  string = string.split("");
  var resultado={}
  string.forEach(function (elemento){
    let existe= false;

    for(x in resultado){
      if (elemento===x){
        existe= true;
      }
    }
    if (existe){
    resultado[elemento]=resultado[elemento]+1;
    }
    else{
      resultado[elemento]=1;
    }
  })
  return resultado;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  s=s.split("");
  let mayus="";
  let min="";
  for (let i=0; i<=s.length-1; i++){

    if(s[i].toUpperCase()===s[i]){
      mayus=mayus+s[i];
    }
    else{
      min=min+s[i];
    }
  }
  return mayus+min;
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
array=str.split(" ");
let resultado="";
for (i=0; i<=array.length-1; i++){
  a=array[i].split("");
  palabra="";
  for(j=a.length-1; j>=0; j=j-1){
    palabra=palabra+a[j];
  }
  if (i===0){resultado=resultado+palabra}
  else{resultado=resultado+" "+palabra}
}
return resultado;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let inv=numero.toString().split("");
  let numInv=""
  for(i=inv.length-1; i>=0; i=i-1){
    numInv=numInv+inv[i];
  }
  if(numero.toString()===numInv){
    return "Es capicua"
  }
  else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let array=cadena.split("");
  let resultado="";
  for(i=0; i<=array.length-1; i++){
    if(array[i]!="a" && array[i]!="b" && array[i]!="c"){
      resultado=resultado+array[i];
    }
  }
  return resultado;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a,b){
    return (a.length-b.length)
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
let resultado=[];
for (i=0; i<arreglo1.length; i++){
  for(j=0; j<arreglo2.length; j++){
    if(arreglo1[i]===arreglo2[j]){
      resultado.push(arreglo1[i]);
      break
    }
  }
}
return resultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
