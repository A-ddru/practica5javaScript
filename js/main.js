/*
1:
-Pedir al usuario su nombre completo ok 
-Determinar la cantidad de palabras que tiene su nombre ok
-si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo ok
-si no, indicar al usuario que tiene un nombre corto ok
*/ 


var userName;

userName=prompt("Coloca tu nombre completo por favor") 
console.log(userName);
console.log(userName.length);

if(userName.length >= 3){
    console.log("Tu nombre es muy largo")
    alert("Tu nombre es muy largo")
}else if(userName.length <= 3){
    console.log("tu nombre es demaciado corto")
    alert("Tu nombre es demaciado corto ")
}


/* 
2:pedir al usuario mediante diferentes propmts su dirección
    (calle)
    (número)
    (colonia)
    (alcaldía)
    (estado)
    mostrar al usuario su dirección completa con el siguiente formato:
    input ->    san mateo 
                172
                la preciosa
                azcapotzalco
                ciudad de mexico
    output ->   San Mateo, 172, La Preciosa, Azcapotzalco, Ciudad De México
*/






var Adress=["Calle","Numero","Colonia","Alcaldia","Estado"]


Calle=prompt("ingresa tu Calle por favor");
Numero=prompt("ingresa tu Numero por favor")
Colonia=prompt("ingresa tu Colonia por favor")
Alcaldia=prompt("ingresa tu Alcaldia por favor")
Estado=prompt("ingresa tu Estado por favor")

console.log([Calle,Numero,Colonia,Alcaldia,Estado])

var completedAdress=Calle.Numero.Colonia.Alcaldia.Estado.split(",")
console.log(completedAdress)



/*
3: 
    Pedir al usuario que escriba una frase
    Pedir al usuario que escriba un caracter
    Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase;
*/



var userName;
var caracter;

userName=prompt("Escribe tu nombre completo por favor");
console.log(userName);
caracter=prompt("escriba un caracter por favor");










/*
4:
    Pedir al usuario su nombre completo
    Mostrarle al usuario sus iniciales con el siguiente formato:
    input  -> "Israel Salinas Martínez"
    output -> I.S.M.
*/

var userName; 

var userName2=prompt("Escribe tu nombre completo por favor")
console.log(unaerName2);