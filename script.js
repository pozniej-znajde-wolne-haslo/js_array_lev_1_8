const deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"];

deutscheGerichte.unshift("Kartoffelsalat", "Döner", "Grünkohl", "Grün Soß");

console.log(deutscheGerichte);
console.table(deutscheGerichte);

const nichtGut = [deutscheGerichte.shift([0]), deutscheGerichte.shift([2]), deutscheGerichte.shift([2])];

console.log(nichtGut);