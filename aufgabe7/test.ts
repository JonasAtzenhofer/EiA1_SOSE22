window.addEventListener("load", function() {


document.querySelector(".germany").addEventListener("click" , function() {
    document.querySelector("#Einwohnerzahl").innerHTML = String(num1+text2);
document.querySelector("#prozentualerAnteil").innerHTML = String((num1 / num3 * num4).toFixed(2)+text5);
document.querySelector("#Wachstumsrate1990").innerHTML = String((num1-num2).toFixed(2)+text2);
document.querySelector("span").innerHTML = "Deutschland";
document.querySelector(".chart").setAttribute('style', 'height: '+String((num1 / num3 * num4).toFixed(2))+'%')
})    

document.querySelector(".italy").addEventListener("click" , function() {
    document.querySelector("#Einwohnerzahl").innerHTML = String(num5+text2);
document.querySelector("#prozentualerAnteil").innerHTML = String((num5 / num3 * num4).toFixed(2)+text5);
document.querySelector("#Wachstumsrate1990").innerHTML = String((num5-num6).toFixed(2)+text2);
document.querySelector("span").innerHTML = "Italien";
document.querySelector(".chart").setAttribute('style', 'height: '+String((num5 / num3 * num4).toFixed(2))+'%')
})

document.querySelector(".netherlands").addEventListener("click", function() {
    document.querySelector("#Einwohnerzahl").innerHTML = String(num7+text2);
document.querySelector("#prozentualerAnteil").innerHTML = String((num7 / num3 * num4).toFixed(2)+text5);
document.querySelector("#Wachstumsrate1990").innerHTML = String((num7 - num8).toFixed(2)+text2);
document.querySelector("span").innerHTML = "Niederlande";
document.querySelector(".chart").setAttribute('style', 'height: '+String((num7 / num3 * num4).toFixed(2))+'%')
})

document.querySelector(".france").addEventListener("click", function() {
    document.querySelector("#Einwohnerzahl").innerHTML = String(num9+text2);
document.querySelector("#prozentualerAnteil").innerHTML = String((num9 / num3 * num4).toFixed(2)+text5);
document.querySelector("#Wachstumsrate1990").innerHTML = String((num9 - num10).toFixed(2)+text2);
document.querySelector("span").innerHTML = "Frankreich";
document.querySelector(".chart").setAttribute('style', 'height: '+String((num9 / num3 * num4).toFixed(2))+'%')
})


document.querySelector(".stars").addEventListener("click", function() {
    document.querySelector("#Einwohnerzahl").innerHTML = String(num3+text2);
document.querySelector("#prozentualerAnteil").innerHTML =String("100%");
document.querySelector("#Wachstumsrate1990").innerHTML = String((num3 - num11).toFixed(2)+text2);
document.querySelector("span").innerHTML = "der EU";
document.querySelector(".chart").setAttribute('style', 'height: '+String((num4 / num4 * num4))+'%')
})


var num1:number = 83.2;
var text1:string = ("Die Gesamteinwohnerzahl Deutschlands beträgt ");
var text2:string = (" Millionen");

console.log(text1 + num1 + text2);
 

var num2:number = 79.753;
var text3:string = ("Die Wachstumsrate zwischen 1990 und 2022 entspricht ")

console.log(text3 + (num1 - num2) + text2);

var num3:number = 447;
var num4:number = 100;
var text4:string = ("Der prozentuale Anteil der deutschen Bevölkerung zur Europäischen Union beträgt ");
var text5:string = ("%")

console.log(text4 + (num1 / num3 * num4) + text5)

var num5:number = 59.5;
var text6:string = ("Die Gesamteinwohnerzahl Italiens beträgt ");

console.log(text6 + num5 + text2);

var num6:number = 56.7;

console.log(text3 + (num5 - num6) + text2);

var text7:string = ("Der prozentuale Anteil der italienischen Bevölkerung zur Europäischen Union beträgt ");
console.log(text7 + (num5 / num3 * num4) + text5);

var num7:number = 17.4;
var text8:string = ("Die Gesamteinwohnerzahl der Niederlande beträgt ");
console.log(text8 + num7 + text2)

var num8:number = 14.9;
console.log(text3 + (num7 - num8) + text2);

var text9:string = ("Der prozentuale Anteil der niederländischen Bevölkerung zur Europäischen Union beträgt ");
console.log(text9 + (num7 / num3 * num4) + text5)

var num9:number = 65.48;
var text10:string = ("Die Gesamteinwohnerzahl Frankreichs beträgt ");
console.log(text10 + num9 + text2);

var num10:number = 56.6
console.log(text3 +(num9 - num10) + text2);

var text11:string = ("Der prozentuale Anteil der französischen Bevölkerung zur Europäischen Union beträgt ");
console.log(text11 + (num9 / num3 * num4) + text5);

var num11:number = 418 



})



