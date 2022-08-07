"use strict";
const id1 = '1321354';
const id2 = 17;
const id3 = 47;
const id4 = 'asdasdas';
const id5 = 47;
const id6 = 'sdfsdfdsfsdf';
const id7 = true;
const call = (callee) => {
    if (typeof callee === 'string') {
        console.log('Skambinama:', callee);
    }
    else {
        console.log('Skambinama:', callee.mobile);
    }
};
const data1 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const data2 = [1, 5, 'burundukas', 8, 'siurprizas', 7];
const flags1 = [1, 1, 0, 0, 0, 1, 1];
const flags2 = [true, false, false, true, true];
console.group('Union operators - užduotys');
{
    console.group('1. Aprašykite objekto tipą Accommodation, kurio savybė "type" būtų, "House" arba "Flat"');
    {
        const firstFlat = {
            type: 'flat',
            adress: 'antaniniu g.,',
            city: 'balbieriskis',
            number: 13,
        };
        const secondHouse = {
            type: 'house',
            adress: 'svarainiu g. ',
            city: 'joniskis',
            number: 89,
        };
        console.log(firstFlat);
        console.log(secondHouse);
    }
    console.groupEnd();
    console.group('2. Aprašykite objekto tipą Car, kurio savybė "transmission" būtų, "Automatic" arba "Manual"');
    {
        const car1 = {
            transmision: 'automatic',
            weels: 'winter',
            fuel: 'gasol',
        };
        const car2 = {
            transmision: 'manual',
            weels: 'seasonal',
            fuel: 'gasol',
        };
        console.log(car1);
        console.log(car2);
    }
    console.groupEnd();
    console.group('3. Aprašykite tipą, kuris kintamajam leistų būti: arba Accommodation masyvu, arba Car masyvu');
    {
        const anyAccoArr = [{
                type: 'house',
                adress: 'svarainiu g. ',
                city: 'joniskis',
                number: 89,
            }];
        const anyCarArr = [{
                transmision: 'manual',
                weels: 'seasonal',
                fuel: 'gasol',
            }];
        console.table(anyAccoArr);
        console.table(anyCarArr);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map