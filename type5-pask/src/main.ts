type Person = {
    readonly name: string,
    readonly surname: string,
    readonly sex: 'male' | 'female',
    age: number,
    income?: number,
    married?: boolean,
    hasCar?: boolean,
  }
  
  const people: Person[] = [
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
  
  /*
    Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
    Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
      * Aprašome tipus
      * Aprašome funkcijas
      * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
      * Atliekame užduoties sprendimą
      * Spausdiname sprendimo rezultatus
    
    Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
      
  */
  console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
  {
    // Tipai:
    type Identity = {
      name: Person["name"],
      surname: Person["surname"],
    }
  
    // Funkcijos:
    const personToIdentity = ({ name, surname }: Person): Identity => {
      return { name, surname };
    }
  
    // Sprendimas:
    const identities: Identity[] = people.map(personToIdentity);
  
    // Spausdinimas:
    console.table(people);
    console.table(identities);
  }
  console.groupEnd();
  
  console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
  {
    // type TaskProps = {
    //   married: NonNullable<Person["married"]>,
    //   hasCar: NonNullable<Person["hasCar"]>,
    // }
  
    type TaskProps = Pick<Required<Person>, "hasCar" | "married">;
  
    const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
      married: Boolean(married),
      hasCar: Boolean(hasCar),
    });
  
    const result: TaskProps[] = people.map(selectTaskProps);
  
    console.table(people);
    console.table(result);
  }
  console.groupEnd();
  
  console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
  {
    type FullNameAndMarriegeStatus = {
      name: Person['name'],
      surname: Person['surname'],
      marriege: Person['married'],
    }

    const FullNameAndMariege = ({name, surname, married}: Person): FullNameAndMarriegeStatus => ({
      name: String(name),
      surname: String(surname),
      marriege: Boolean(married),
    });
    const result: FullNameAndMarriegeStatus[] = people.map(FullNameAndMariege);

    console.log(result);
  }
  console.groupEnd();
  
  console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
  {
    type SexAndIncome = {
      sex: Person['sex'],
      income: Person['income'],
    };

    const arrOfIncomeAndSex = ({sex, income}: Person): SexAndIncome => ({
      sex, income
      // sex: String(sex),
      // income: Number(income),

    });
    const result: SexAndIncome[] = people.map(arrOfIncomeAndSex);
    console.log(result);
  }
  console.groupEnd();
  
  console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
  {
    type FullnameAndSex = {
      name: Person['name'],
      surname: Person['surname'],
      sex: Person['sex'],
    };
    const arrOfFullnameAndSex = ({name, surname, sex}: Person): FullnameAndSex =>({
      // name: String(name),
      // surname: String(surname),
      // sex: String(sex),
      name, surname, sex
    });

    const result: FullnameAndSex[] = people.map(arrOfFullnameAndSex)

    console.log(result)
  }
  console.groupEnd();
  
  console.groupCollapsed('6. Atspausdinkite visus vyrus');
  {
    // type TaskProps = Pick<Required<Person>, "hasCar" | "married">;

    type OnlyMale = Omit<Person, 'sex'> & {
      sex: 'male';
    }

    const male = ({sex}: Person): boolean => sex === 'male';

    const result: OnlyMale[] = people.filter(male) as OnlyMale[];
    console.log(result);
  }
  console.groupEnd();
  
  console.groupCollapsed('7. Atspausdinkite visas moteris');
  {
    type OnlyFemale = Omit<Person, 'sex'> & {
      sex: 'female';
    };

    const female = ({sex}: Person): boolean => sex === 'female';

    const result: OnlyFemale[] = people.filter(female) as OnlyFemale[];

    console.log(result);
  }
  console.groupEnd();
  
  console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
  {
    type FullName = {
      name: Person['name'],
      surname: Person['surname'],
      hasCar: Person['hasCar'],
    };
    const personWithCar = ({hasCar}: Person): boolean => Boolean(hasCar);

    const fullNameWithCar = ({name, surname, hasCar}: Person): FullName => ({name, surname, hasCar}); 

    const arrOfFullNameWithCar = (result: FullName[], {hasCar, name, surname}: Person): FullName[] => {
    if (hasCar) result.push({name, surname, hasCar})
    return result;
    }
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
    type marieged = Omit<Person, 'married'> & {
      married: true,
    };

    const isMarrieged = (result: marieged[], person: Person): marieged[] => {
      if (person.married) result.push(person as marieged);
      return result;
    };

    const result: marieged[] = people.reduce(isMarrieged, []);

    console.log(result);
    console.log(people);

  }
  console.groupEnd();
  
  console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
  {
    type DrivingPeopleBySex = {
      [Key in Person['sex']]?: number
    };
    const groupedDrivingPeopleBySex = (result: DrivingPeopleBySex, person: Person): DrivingPeopleBySex => {
      if(!person.hasCar) return result;

      if(!result[person.sex]) result[person.sex] = 0;
      result[person.sex] = result[person.sex] as number + 1;
      return result;
    };

    const result : DrivingPeopleBySex = people.reduce(groupedDrivingPeopleBySex, {});
    
    console.log(result);

  }
  console.groupEnd();
  
  console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
  {
    type PersonIncomeReplacedWithSalary = Omit<Person, 'income'> & { salary?: Person['income']
    }

    const incomeReplacedWithSalary = ({income, ...person}: Person): PersonIncomeReplacedWithSalary => {
      const result: PersonIncomeReplacedWithSalary ={ ...person}; 
    if(income) result.salary = income;

    return result;
    }

    const peopleWithIncome: PersonIncomeReplacedWithSalary[] = people.map(incomeReplacedWithSalary);

    console.table(peopleWithIncome)
  }
  console.groupEnd();
  
  console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
  {
    type PersonWithNoSexAndFullname = Omit<Person, 'name'| 'surname'| 'sex'>;
    
    const createPersonWithNoSexAndFullname = ({name, surname, sex, ...anonymousPerson}: Person): PersonWithNoSexAndFullname => anonymousPerson;

    const anonymousPeople: PersonWithNoSexAndFullname[] = people.map(createPersonWithNoSexAndFullname);

    console.table(anonymousPeople);

  }
  console.groupEnd();
  
  console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
  {
    type PersonWithFullname = Omit<Person, 'name' | 'surname'> & {
     fullname: string,
    }
    const createPersonWithFullname = ({name, surname, ...fullnamePerson}: Person): PersonWithFullname => ({...fullnamePerson, fullname: name + ' '+ surname})

    const replacedPeople: PersonWithFullname[] = people.map(createPersonWithFullname);

    console.table(replacedPeople)
  }
  console.groupEnd();