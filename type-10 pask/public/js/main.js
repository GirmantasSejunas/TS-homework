import WorkPerson from './entities/work-person.js';
import SelfEmployedPerson from './entities/self-employed-person.js';
import BuisnessLicencePerson from './entities/business-license-person.js';
import Job from './entities/job.js';
const backendDeveloper = new WorkPerson({
    id: '845878',
    name: 'Vienas',
    surname: 'Vienetas',
    hourPay: 15,
    fullTimeEquivalent: 1,
});
const frontendDeveloper = new WorkPerson({
    id: '745878',
    name: 'Du',
    surname: 'Dvejetas',
    hourPay: 20,
    fullTimeEquivalent: 0.5,
});
const selfEmployed1 = new SelfEmployedPerson({
    id: '845878',
    name: 'trys',
    surname: 'trejetas',
    hourPay: 25,
    hoursWorked: 10,
});
const selfEmployed2 = new SelfEmployedPerson({
    id: '251678',
    name: 'keturi',
    surname: 'ketvertas',
    hourPay: 10,
});
const designer = new BuisnessLicencePerson({
    id: '845878',
    name: 'Penki',
    surname: 'Penketas',
});
const jobs = [
    new Job('Facebook adds', 150),
    new Job('Google adds', 500),
    new Job('Twitter adds', 300),
];
jobs[0].completeJob();
jobs[2].completeJob();
const marketingSpecialist = new BuisnessLicencePerson({
    id: '151698',
    name: 'Sesi',
    surname: 'Sesetas',
    jobs,
});
const employees = [
    backendDeveloper,
    frontendDeveloper,
    selfEmployed1,
    selfEmployed2,
    designer,
    marketingSpecialist,
];
console.group('1. Atspausdinkite visus darbuotojus');
employees.forEach((emp) => console.log(emp.toString()));
console.groupEnd();
console.group('2. Atspausdinkite visų darbuotojų atlyginimus');
employees.forEach((emp) => {
    console.log(emp.getPersonInfo());
    console.log(emp.calcPay());
});
console.groupEnd();
//# sourceMappingURL=main.js.map