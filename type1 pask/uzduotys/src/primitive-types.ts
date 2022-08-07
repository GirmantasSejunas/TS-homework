/* eslint-disable */
/*
TypeScript'e galioja tie patys primityvūs duomenų tipai kaip ir JavaScript'e:
  * string - simbolių darinys
  * number - skaičius
  * boolean - loginis kintamasis
  * null - tipas pasakantis, kad reikėmės/nuorodos nėra
  * undefined - neapibrėžtas tipas
  * symbol - skirtas unikalioms reikšmėms kurti - šio kurso metu jo nenagrinėsime
*/
const height: number = 150;
const weight: number = 100;
const fullname: string = 'Girmantas';
const surname: string = 'Sejunas';
const age: number = 34;
const animals: null = null;
const birds: undefined = undefined;

console.group('priskirti duomenu tipus');
const title: string = 'vermutas';
const subTitle: string = 'kavine-baras';
const peopleCount: number = 5;
const maxPeopleCount: number = 32;
const isOpen: boolean = true;
const openTime: string = '12.00';
const closeTime: string = '02.00';
const security: null = null;

console.log({
    title:[title, typeof title],
    subTitle:[subTitle, typeof subTitle],
    peopleCount:[peopleCount, typeof peopleCount],
    isOpen:[isOpen, typeof isOpen],
    closeTime:[closeTime, typeof closeTime],
    security:[security, typeof security],
});
console.groupEnd()
