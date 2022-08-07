"use strict";
const numArr = [1, 2, -3, 5, 8, 22, 65, -98, 854, 24, -666, 845,];
const wordArr = ['namas', 'masina', 'saule', 'debesys'];
console.log(numArr);
console.log(wordArr);
console.groupCollapsed('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
    const lastIndexOfArr = (arr) => (arr.length - 1);
    console.log(lastIndexOfArr(numArr));
    console.log(lastIndexOfArr(wordArr));
}
console.groupEnd();
console.groupCollapsed('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
    const allArrIndex = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(i);
    };
    allArrIndex(numArr);
    console.log(numArr);
    allArrIndex(wordArr);
    console.log(wordArr);
}
console.groupEnd();
console.groupCollapsed('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
    const arrValues = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(arr[i]);
    };
    arrValues(numArr);
    console.log(numArr);
    arrValues(wordArr);
    console.log(wordArr);
}
console.groupEnd();
console.groupCollapsed('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
{
    const arrIndexAndValues = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(`[${i}] - ${arr[i]}`);
    };
    arrIndexAndValues(numArr);
    arrIndexAndValues(wordArr);
}
console.groupEnd();
console.groupCollapsed('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
    const reversedArrValues = (arr) => {
        for (let i = 0; i < arr.length; i++)
            console.log(`${arr[i]}`);
    };
    console.log(numArr);
    reversedArrValues(numArr.reverse());
    console.log(wordArr);
    reversedArrValues(wordArr.reverse());
}
numArr.reverse();
wordArr.reverse();
console.groupEnd();
console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
    const arrIndexInaRow = (arr) => {
        const indexInRow = arr.map((_, index) => index).join(', ');
        console.log(indexInRow);
    };
    arrIndexInaRow(numArr);
    console.log(numArr);
    arrIndexInaRow(wordArr);
    console.log(wordArr);
}
console.groupEnd();
console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
    const arrIndexInaRow = (arr) => {
        for (let i = 0; i < arr.length; i++)
            ;
    };
    arrIndexInaRow(numArr);
    console.log(numArr.toString());
    arrIndexInaRow(wordArr);
    console.log(wordArr.join());
}
console.groupEnd();
console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
{
    const arrIndexAndValuesInRow = (arr) => {
        const indexAndValuesInRow = arr.map((value, index) => `[${index}] => ${value}`).join(', ');
        console.log(indexAndValuesInRow);
    };
    arrIndexAndValuesInRow(numArr);
    arrIndexAndValuesInRow(wordArr);
}
console.groupEnd();
console.groupCollapsed('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
    const doubleArr = (arr) => arr.map(nr => nr * 2);
    console.log(numArr);
    console.log(doubleArr(numArr));
}
console.groupEnd();
console.groupCollapsed('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
    const squereArrValues = (arr) => arr.map(x => x * x);
    console.log(numArr);
    console.log(squereArrValues(numArr));
}
console.groupEnd();
console.groupCollapsed('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
    const arrValueAndIndexMultiplication = (arr) => arr.map((e, i) => e * i);
    console.log(numArr);
    console.log(arrValueAndIndexMultiplication(numArr));
}
console.groupEnd();
console.groupCollapsed('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
    const onlyPositiveNumbers = (arr) => arr.filter(n => n > 0);
    console.log(onlyPositiveNumbers(numArr));
}
console.groupEnd();
console.groupCollapsed('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
    const onlyNegativeNumbers = (arr) => arr.filter(n => n < 0);
    console.log(onlyNegativeNumbers(numArr));
}
console.groupEnd();
console.groupCollapsed('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
    const evenNumbersArr = (arr) => arr.filter((x) => x % 2 === 0);
    console.log(numArr);
    console.log(evenNumbersArr(numArr));
}
console.groupEnd();
console.groupCollapsed('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
    const oddNumbersArr = (arr) => arr.filter((e) => e % 2 != 0);
    console.log(numArr);
    console.log(oddNumbersArr(numArr));
}
console.groupEnd();
console.group('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
    const onlyPositiveNumbersOfArr = (arr) => arr.map((x) => x < 0 ? (x * (-1)) : x);
    console.log(numArr);
    console.log(onlyPositiveNumbersOfArr(numArr));
}
console.groupEnd();
//# sourceMappingURL=main.js.map