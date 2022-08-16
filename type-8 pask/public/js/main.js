"use strict";
class Person {
    name;
    surname;
    age;
    height;
    constructor({ name, surname, age, height, }) {
        this.name = name;
        this.surname = surname;
        this.setAge(age);
        this.setHeight(height);
    }
    setName(name) {
        this.name = name;
    }
    setSurname(surname) {
        this.surname = surname;
    }
    setAge(age) {
        if (age < 1 || age > 150) {
            console.error(`ivestas amzius ${age} netinkamas`);
            return;
        }
        ;
        if (age % 1 !== 0) {
            console.error(`amzius ${age} turi buti sveikas skaicius`);
            return;
        }
        this.age = age;
    }
    setHeight(height) {
        this.height = height;
    }
    getFullname() {
        return `${this.name} ${this.surname}`;
    }
    getAge() {
        return this.age;
    }
}
console.groupCollapsed('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai iš jų sukurkite setterius, ir bendrą getterį fullname');
{
    const person = new Person({
        name: 'girmantas',
        surname: 'sejunas',
        age: 32,
        height: 0,
    });
    console.log('pradinis vardas -', person.getFullname());
    const person2Name = 'algis';
    const person2Surname = 'ramas';
    person.setName(person2Name);
    person.setSurname(person2Surname);
    console.log('pakeistas vardas -', person.getFullname());
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite Person klasei savybę "age". Inkapsuliuokite šią savybę taip, jog reikšmė galėtų būti tik sveiki skaičiai nuo 1 iki 150');
{
    const person = new Person({
        name: 'girmantas',
        surname: 'sejunas',
        age: 35,
        height: 154,
    });
    console.log(person);
    const person2 = new Person({
        name: 'algis',
        surname: 'ramas',
        age: 200,
        height: 222,
    });
    console.log(person2);
    const age1 = -15;
    const age2 = 400;
    const age3 = 4.25;
    const age4 = 40;
    person.setAge(age1);
    console.log(`${age1}: netinkami skaiciai`);
    person.setAge(age2);
    console.log(`${age2}: netinkami skaiciai`);
    person.setAge(age3);
    console.log(`${age3}: netinkami skaiciai`);
    person.setAge(age4);
    console.log('tinkami skaiciai: ', person.getAge());
}
console.groupEnd();
console.group('3. Sukurkite Person klasei savybę "height" kurios vertė būtų saugoma centimetrais. Sukurkite šiai savybei setterį, kuris pirmu parametru priimtų reikšmę, o antru parametru priimtų matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras nėra perduotas, numatytas(default) matavimo vienetas turi būti cm. Getteris turi grąžinti reikšmę centimetrais.');
{
    const person = new Person({
        name: 'girmantas',
        surname: 'sejunas',
        age: 35,
        height: 154,
    });
    console.log(person);
}
console.groupEnd();
console.group('4. Sukurkite Person klasei statinę savybę "heightUnits". Jos tipas turi būti išvardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reikšmė turi būti centimetrai');
{
}
console.groupEnd();
console.group('5. "height" setterio antram parametrui pakeiskite sąjungos tipą į [4.] užduotyje sukurtą išvardinimą(enum). Priderinkite pavyzdžius ir metodą.');
console.group('6. "height" geteriui sukurkite logiką, jog jis grąžintų matavimo vienetus, pagal statinės savybės "heightUnits" reikšmę.');
{
}
console.groupEnd();
console.group('7. Analogiškai pagal [4.]-[6.] punktus sukurkite savybę weight su statiniu išvardinimu "weightUnits", kurio pasirinkimai turi būti: "KG", "LBS"');
{
}
console.groupEnd();
console.group('8. Sukurkite klasei Person metodą "toString". Kuris paverstų žmogaus savybes gražiu formatu: vardas ir pavardė pirmoje eilutėje, o "height" ir "weight" savybės atskirose eilutėse, atitrauktos nuo kairio krašto per "tab" simbolį, ir su matavimo vienetais(kurie išsaugoti) statinėse Person klasės savybėse');
//# sourceMappingURL=main.js.map