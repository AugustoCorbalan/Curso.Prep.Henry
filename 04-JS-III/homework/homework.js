// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length - 1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(i=array.length-1; i>=0; i=i-1 ){
    array[i]= array[i]+1;
  }
  return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let string = ""
  for (i=palabras.length-1; i>=0; i=i-1){
    pos= (palabras.length-1)-i;
    if (pos != 0){
      string = string +" "+ palabras[pos];
    }
    else{
     string=palabras[pos];
    }
  }
  return(string);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
let existe=false;
for(i=array.length; i>=0; i= i-1){
  if (elemento === array[i]){
    existe= true;
    break;
  }
}
return(existe);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma=0;
for (i=numeros.length-1; i>=0; i= i-1){
  suma= suma+numeros[i];
}
return(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma=0;
  for (i=resultadosTest.length-1; i>=0; i= i-1){
    suma= suma + resultadosTest[i];
  }
  let promedio= suma/resultadosTest.length;
  return(promedio);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let posibleMayor= numeros[0]
  for(i=numeros.length-1; i>0; i= i-1){
    if(numeros[i]>posibleMayor){
      posibleMayor= numeros[i];
    }
  }
    return(posibleMayor);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length===0){
    return(0);
  }
  else if(arguments.length === 1){
    return(arguments[0]);
  }
  else{
    let producto=1;
    for(i=arguments.length-1; i>=0; i=i-1){
      producto = producto*arguments[i];
    }
    return(producto);
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contador=0
  for(i=arreglo.length-1; i>=0; i=i-1){
    if(arreglo[i]>18){
      contador= contador+1
    }
  }
    return(contador);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if(numeroDeDia===1 || numeroDeDia===7){
    return("Es fin de semana");
  }
  else {
    return("Es dia Laboral")
  }
}


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
    x = n.toString();
    if(x[0]==9){
      return(true);
    }
    else{
      return(false);
    }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  let resultado= true;
  for(i=arreglo.length-1; i>0; i=i-1){
    if(arreglo[0] != arreglo[i]){
     resultado= false;
    }
  }
  return(resultado);
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
let enero= false;
let marzo= false;
let noviembre= false;
let resultado=[]
for(i=array.length-1; i>=0; i=i-1){
  if(array[i]=== "Enero" || array[i]==="Marzo" ||array[i]==="Noviembre"){

    for(j=resultado.length; j>=0; j=j-1){
      if(array[i]=="Enero" && enero == false){
          enero = true;
          resultado.push(array[i]);
      }
      else if(array[i]==="Marzo" && marzo==false){
          marzo = true;
          resultado.push(array[i]);
      }
      else if(array[i]==="Noviembre" && noviembre==false){
          noviembre = true;
          resultado.push(array[i]);
      }
      }
    }
  }

if(enero && marzo && noviembre){
  return(resultado);
}
else{
  return("No se encontraron los meses pedidos")
}
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
let resultado = []
for(i=array.length-1; i>=0; i=i-1){
  if(array[i]>100){
    resultado.push(array[i]);
  }
}
return(resultado);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array=[]
  let suma=true;
  for(i=0; i<=9; i++){
    numero=numero+2;
    if(i+1===numero){
      return("Se interrumpió la ejecución");
      suma=false;
      break;
    }
    else{
        array.push(numero);
    }
  }
  if(suma){
    return(array);
}
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array=[]
  let suma=true;
  for(i=0; i<9; i++){
    numero=numero+2;
    if(i+1===numero){
      return("Se interrumpió la ejecución");
      suma=false;
      break;
    }
    else if (i+1==5){
      continue;
    }
    else{
        array.push(numero);
    }
  }
  if(suma){
    return(array);
  }
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
