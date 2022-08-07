"use strict";
const country = 'Latvia';
const country2 = 'Estonia';
const req1 = {
    url: 'https://tavo-veidas.lt',
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
};
const req2 = {
    url: 'https://tavo-veidas.lt/api/',
    headers: {
        'Authorization': 'Bearer fhdguisdf8g76sdf89ghf5..?sfg',
        'Content-Type': 'application/json',
    },
    body: {
        image: 'https://i.pinimg.com/474x/67/0a/1d/670a1d06e7bff426ec343e8c06c93ca5--crazy-faces-strange-people.jpg',
    },
    method: 'POST',
};
console.group('Literal types - užduotys');
{
    const Ryga = 'Ryga';
    console.group('1. Sukurkite konkrečius 5 dižiausių Latvijos miestų tipus. Sukurkite tipą, kurio reikšmė būtų viena iš miestų.');
    {
        const city = 'Ryga';
        const city2 = 'Daugapvils';
        console.log(city, city2);
    }
    console.groupEnd();
    console.group('2. Sukurkite konkrečias 5 šunų veisles. Sukurkite tipą, kurio reikšmė būtų viena iš veislių.');
    {
        const breed = 'Aviganis';
        const breed2 = 'Haskis';
        console.log(breed, breed2);
    }
    console.groupEnd();
    console.group('3. Sukurkite konkrečias 5 mašinos dalių tipus. Sukurkite tipą, kurio reikšmė būtų viena iš dalių.');
    {
        const dalys = ['Variklis', 'Ratai', 'Langai'];
        console.log(dalys);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map