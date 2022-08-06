/*
Objetos: Los Objetos son contenedores que pueden tener cualquier tipo de elmentos en su ineterior los cuales se denominan "propiedades".
        El objeto se define con un nombre del objeto y cada elemento en su interior esta definido por un key (o plabra clave) y por un value (o valor del elmento).
        En donde el "key" esta definido por el nombre del elmento y el "value" es lo que tiene dentro, que pude ser cualquier statments.

Propiedades: Se denomina como propiedad de un objeto a cada statments que contiene en su interior.

Métodos: Cuando definimos como valor de una propiedad una función, a esta se la llama "Método".

Bucle for...in: Es un caso especial del bucle for, que nos sirve para poder iterar en los elementos del objeto.
                Este bucle tiene una sintaxis similar a la de un bucle for ordinario:

                for(let nombre_variable in nombre_objeto){
                  acá colocamos el codigo que queremos
                  ejecutar en el bucle..
                }

                En donde la variable "clave" irá tomando el nombre del key de la propiedad que se esté iterando en ese momento.

Notación de punto y de corchetes: Cuando queremos acceder a una propiedad del objeto, lo podemos hacer de estas 2 formas (por notacion de punto o de corchete).
                                  La notación de punto, tiene la ventaja de ser más directa, en donde despues del punto colocamos el key de la propiedad. En este tipo de 
                                  notación el interprete espera directamente el key de la propiedad despues del (.). Y lo interpreta de forma literal.
                                  Notación:
                                            objeto.key;
                                  La notacion con corchetes, tiene como ventaja que además de pasarle directamente el key de la propiedad a la que queremos acceder, podemos pasarle
                                  una variable, en la cual esté guradada el nombre (key) de la propiedad a la que queremos acceder.
                                  Notación:
                                            objeto.["key"];
*/
