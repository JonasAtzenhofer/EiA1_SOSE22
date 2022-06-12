interface Person {
    namen: string
    alter: number
    geschlecht: string

}
var Person: Person [] = [
  { namen: "Robert",
   alter: 22,
   geschlecht: "männlich",
},
{

   namen: "Saskia",
   alter: 21,
   geschlecht: "weiblich",
},

{
   namen: "Tristan",
   alter: 19,
   geschlecht: "männlich",
}]

for ( let index:number = 0; index < Person.length; index++)

console.log(Person[index].namen);

var Rechnen: number[] = [15,25,50,100]


let numbers: number[] = [5,15,25,30]
let summe: number = 0;
for (let index: number = 0; index<numbers.length; index++)
{ summe = summe + index}
console.log(summe)