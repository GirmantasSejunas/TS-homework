"use strict";
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    },
    {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    },
    {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    },
    {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
        hasCar: true,
    },
    {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        income: 1200,
        married: true,
        hasCar: true,
    },
    {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72,
        income: 364,
        married: false,
        hasCar: false,
    },
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = ({ name, surname }) => {
        return { name, surname };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const selectTaskProps = ({ married, hasCar }) => ({
        married: Boolean(married),
        hasCar: Boolean(hasCar),
    });
    const result = people.map(selectTaskProps);
    console.table(people);
    console.table(result);
}
console.groupEnd();
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
    const FullNameAndMariege = ({ name, surname, married }) => ({
        name: String(name),
        surname: String(surname),
        marriege: Boolean(married),
    });
    const result = people.map(FullNameAndMariege);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
    const arrOfIncomeAndSex = ({ sex, income }) => ({
        sex, income
    });
    const result = people.map(arrOfIncomeAndSex);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const arrOfFullnameAndSex = ({ name, surname, sex }) => ({
        name, surname, sex
    });
    const result = people.map(arrOfFullnameAndSex);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
    const male = ({ sex }) => sex === 'male';
    const result = people.filter(male);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
    const female = ({ sex }) => sex === 'female';
    const result = people.filter(female);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
    const personWithCar = ({ hasCar }) => Boolean(hasCar);
    const fullNameWithCar = ({ name, surname, hasCar }) => ({ name, surname, hasCar });
    const arrOfFullNameWithCar = (result, { hasCar, name, surname }) => {
        if (hasCar)
            result.push({ name, surname, hasCar });
        return result;
    };
    const peoleWithCar = people.filter(personWithCar);
    const peopleFullNameWithCar = peoleWithCar.map(fullNameWithCar);
    const peopleFullNameWithCar2 = people.reduce(arrOfFullNameWithCar, []);
    console.log(people);
    console.log(peopleFullNameWithCar);
    console.log(peopleFullNameWithCar2);
}
console.groupEnd();
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
    const isMarrieged = (result, person) => {
        if (person.married)
            result.push(person);
        return result;
    };
    const result = people.reduce(isMarrieged, []);
    console.log(result);
    console.log(people);
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
    const groupedDrivingPeopleBySex = (result, person) => {
        if (!person.hasCar)
            return result;
        if (!result[person.sex])
            result[person.sex] = 0;
        result[person.sex] = result[person.sex] + 1;
        return result;
    };
    const result = people.reduce(groupedDrivingPeopleBySex, {});
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
}
console.groupEnd();
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
}
console.groupEnd();
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
}
console.groupEnd();
//# sourceMappingURL=main.js.map