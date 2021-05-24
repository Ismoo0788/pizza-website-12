/*
ismail Yilmaz
pizza winkel
*/

alert ("Welkom bij pizzatime bij ons kunt u 3 afmetingen van pizza's kiezen. small van 25cm is voor €6, medium van 30cm is voor €9,00 en large van 35cm is voor €12,00")
// Alert die informatie over de menu van Pizzatime


//  Variabelen die voor de menu zijn.

var small = 5;
var medium = 9;
var large = 12;

//Variabelen die voor afmetingen zijn

var aantalsmall;
var aantalmedium;
var aantallarge;

// prompt stelt een vraag over de afmeting en daarna slaat het bij een variabele op

aantalsmall = prompt("Hoeveel small pizza's?");
aantalmedium = prompt("Hoeveel medium pizza's?");
aantallarge = prompt("Hoeveel large pizza's?");

document.writeln("Het aantal van de bestelde small pizza's");
document.writeln(aantalsmall+ "<br>");
document.writeln("de bedrag van deze afmeting");
document.writeln(small + aantalsmall, "e" , "<br>");

document.writeln("Het aantal van de bestelde medium pizza's");
document.writeln(aantalmedium+ "<br>");
document.writeln("de bedrag van deze afmeting");
document.writeln(medium + aantalmedium, "e" , "<br>");

document.writeln("Het aantal van de bestelde large pizza's");
document.writeln(aantalgroot+ "<br>");
document.writeln("de bedrag van deze afmeting");
document.writeln(large + aantallarge, "e" , "<br>");



