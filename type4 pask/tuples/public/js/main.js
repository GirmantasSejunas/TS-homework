"use strict";
const person1 = ["Koridas", "Atmazas"];
const person2 = ["Paklodijus", "Pagalvė"];
const person3 = ["Višta", "Maumedienė"];
let currentAge = 18;
let currentHeight = 180;
const age = [currentAge, () => currentAge += 1];
const height = [currentAge, (h) => {
        if (h)
            currentHeight = h;
    }];
console.group('Tuples - užduotys');
{
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const personInfo = ['Girmantas', 34];
        const personInfo2 = ['Sejunas', 74];
        console.log(personInfo);
        console.log(personInfo2);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const dogAndHuman = [{
                name: 'algis', age: 41
            }, {
                name: 'dogis',
                age: 7,
                breed: "Laika",
            }];
        console.log(dogAndHuman);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const triangle1 = [[0, 5], [2, 2], [4, 6]];
        const triangle2 = [[-5, 1], [4, 0], [4, 3]];
        console.log({
            triangle1,
            triangle2,
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map