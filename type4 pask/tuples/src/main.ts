/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type PersonTuple = [string, number];
  type Dog = {
    name: string,
    age: number,
    breed: 'Haskis' | 'Laika',
  };
  type Person = {
    name: string,
    age: number,
  };
  type Frendship = [Person, Dog];
  type PointsTuple = [number, number];
  type TriangleTuple = [PointsTuple, PointsTuple, PointsTuple];


  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const personInfo:PersonTuple = ['Girmantas', 34];
    const personInfo2:PersonTuple = ['Sejunas', 74];

    console.log(personInfo);
    console.log(personInfo2);
  }
  console.groupEnd();

  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    const dogAndHuman:Frendship  = [{
       name: 'algis',age: 41},{
        name: 'dogis',
        age: 7,
        breed: "Laika",
    }]
    console.log(dogAndHuman)
  }
  console.groupEnd();

  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    const triangle1: TriangleTuple = [[0, 5], [2, 2], [4, 6]];
    const triangle2: TriangleTuple = [[-5, 1], [4, 0], [4, 3]];

    console.log({
      triangle1,
      triangle2,
    });
  }
  console.groupEnd();

}
console.groupEnd();