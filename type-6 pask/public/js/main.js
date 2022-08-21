"use strict";
const numbers = [1, 2, 5, 8, 12, -5, -15, 0];
const words = ['vienas', 'du', 'trys', 'keturi', 'penki'];
const boolean = [true, true, false, true, false];
console.log(numbers);
console.log(words);
console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
    const firstArrElement = (arr) => {
        return arr[0];
    };
    console.log(firstArrElement(numbers));
    console.log(firstArrElement(words));
    console.log(firstArrElement(boolean));
}
console.groupEnd();
console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
    const lastArrElement = (arr) => {
        return arr[arr.length - 1];
    };
    console.log(lastArrElement(numbers));
    console.log(lastArrElement(words));
    console.log(lastArrElement(boolean));
}
console.groupEnd();
console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
    const returnSameTypeArrCopy = (arr) => {
        const arrCopy = arr.map(e => e);
        return arrCopy;
    };
    console.log(returnSameTypeArrCopy(numbers));
    console.log(returnSameTypeArrCopy(words));
    console.log(returnSameTypeArrCopy(boolean));
}
console.groupEnd();
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
    const firstValueRepeatedXTimes = (value, count) => {
        return Array.from(new Array(count)).map(e => value);
    };
    const firstArr = [['aaa', 5]];
    const secondArr = [[2, 4]];
    const thirddArr = [[true, 2]];
    firstArr.forEach((element) => console.log(`${element.join(', ')}:`, firstValueRepeatedXTimes(...element)));
    secondArr.forEach((element) => console.log(`${element.join(', ')}:`, firstValueRepeatedXTimes(...element)));
    thirddArr.forEach((element) => console.log(`${element.join(', ')}:`, firstValueRepeatedXTimes(...element)));
}
console.groupEnd();
console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
    const joinedArr = (arr1, arr2) => {
        return [...arr1, ...arr2];
    };
    const firstArr = [[1, 2, 3], [6, 7, 8]];
    const secondArr = [['labas', 'vakaras'], ['mieli', 'sveteliai']];
    const thirdArr = [[true, true], [false, false]];
    console.log(joinedArr(...firstArr));
    console.log(joinedArr(...secondArr));
    console.log(joinedArr(...thirdArr));
}
console.groupEnd();
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
    const newObj = (initVal) => {
        let val = initVal;
        return {
            setValue: (newVal) => val = newVal,
            getValue: () => val,
        };
    };
    const aaa = 5;
    const bbb = ['labas', 'rytas'];
    const ccc = { name: 'girmantas',
        surname: 'sejunas' };
    const obj1 = newObj(aaa);
    const obj2 = newObj(bbb);
    const obj3 = newObj(ccc);
    console.log({
        aaa: obj1.getValue(),
        bbb: obj2.getValue(),
        ccc: obj3.getValue(),
    });
    obj1.setValue(7);
    obj2.setValue(['vakaras']);
    obj3.setValue({ name: 'algis', surname: 'algiauskas' });
}
console.groupEnd();
console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`);
{
    const people = [
        { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
        { name: 'Kurpius', surname: 'Medainis' },
        { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
        { name: 'Ferodijus', surname: 'Cilcius' },
        { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
        { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
        { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
        { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
    ];
}
//# sourceMappingURL=main.js.map