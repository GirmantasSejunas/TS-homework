/*
Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

type PrimitiveType = string | number | boolean;

const numbers: number[] = [1, 2, 5, 8, 12, -5, -15, 0];

const words: string[] = ['vienas', 'du', 'trys', 'keturi', 'penki'];

const boolean: boolean[] = [true, true, false, true, false];

console.log(numbers);
console.log(words);

console.group('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const firstArrElement = <Type>(arr: Type[]): Type | undefined => {
  return arr[0];
  }

  console.log(firstArrElement(numbers));
  console.log(firstArrElement(words));
  console.log(firstArrElement(boolean));
}
console.groupEnd();

console.group('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const lastArrElement = <Type>(arr: Type[]): Type | undefined => {
    return arr[arr.length - 1]
  };

  console.log(lastArrElement(numbers));
  console.log(lastArrElement(words));
  console.log(lastArrElement(boolean));
}
console.groupEnd();

console.group('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
const returnSameTypeArrCopy = <Type extends PrimitiveType>(arr: Type[]): Type[] => {
  const arrCopy: Type[] = arr.map(e => e)
  return arrCopy
}

console.log(returnSameTypeArrCopy<number>(numbers));
console.log(returnSameTypeArrCopy<string>(words));
console.log(returnSameTypeArrCopy<boolean>(boolean));
}
console.groupEnd();

console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{
  // ('a', 2) -> ['a', 'a']
  // (77, 4) -> [77, 77, 77, 77]
  // (true, 1) -> [true]
  // Sprendimas ir rezultatų spausdinimas

  type PrimitiveAndNumberType = [PrimitiveType, number];

  const firstValueRepeatedXTimes = <V extends PrimitiveType>(value: V, count: number): Array<V> => {
    return Array.from(new Array(count)).map(e => value);
  }

  const firstArr: PrimitiveAndNumberType[] = [['aaa', 5]];
  const secondArr: PrimitiveAndNumberType[] = [[2, 4]];
  const thirddArr: PrimitiveAndNumberType[] = [[true, 2]];

  firstArr.forEach((element) => console.log(
    `${element.join(', ')}:`,
    firstValueRepeatedXTimes(...element)
  ));

  secondArr.forEach((element) => console.log(
    `${element.join(', ')}:`,
    firstValueRepeatedXTimes(...element)
  ));
  thirddArr.forEach((element) => console.log(
    `${element.join(', ')}:`,
    firstValueRepeatedXTimes(...element)
  ));


}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  type SameTwoTypes<Same> =[Same[], Same[]];

  const joinedArr = <Type>(arr1: Type[], arr2: Type[]): Type[] => {
    return [...arr1, ...arr2]
  }

  const firstArr: SameTwoTypes<number> = [[1, 2, 3], [6, 7, 8]];
  const secondArr: SameTwoTypes<string> = [['labas', 'vakaras'], ['mieli', 'sveteliai']];
  const thirdArr:SameTwoTypes<boolean> = [[true, true], [false, false]];


  console.log(joinedArr(...firstArr));
  console.log(joinedArr(...secondArr));
  console.log(joinedArr(...thirdArr));

}
console.groupEnd();

console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };

  const newObj = <Type>(initVal: Type): IncapsulatedValueObject<Type> => {
    let val: Type = initVal;
    return {
     setValue: (newVal) => val = newVal,
     getValue: () => val,
  }

  }
  const aaa: number = 5;
  const bbb: Array<string> = ['labas', 'rytas'];
  const ccc: {name: string, surname: string} = {name: 'girmantas',
   surname: 'sejunas'};

   const obj1 = newObj(aaa);
   const obj2 = newObj(bbb);
   const obj3 = newObj(ccc);

   console.log({
    aaa: obj1.getValue(),
    bbb: obj2.getValue(),
    ccc: obj3.getValue(),
  })

  obj1.setValue(7);
  obj2.setValue(['vakaras']);
  obj3.setValue( {name: 'algis', surname: 'algiauskas'});
  
}

console.groupEnd();

console.group(`
  7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. 
  Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.
  Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą`
);
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  const people: (Person | Student | Worker)[] = [
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