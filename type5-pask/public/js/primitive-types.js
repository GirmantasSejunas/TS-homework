const height = 150;
const weight = 100;
const fullname = 'Girmantas';
const surname = 'Sejunas';
const age = 34;
const animals = null;
const birds = undefined;
console.group('priskirti duomenu tipus');
const title = 'vermutas';
const subTitle = 'kavine-baras';
const peopleCount = 5;
const maxPeopleCount = 32;
const isOpen = true;
const openTime = '12.00';
const closeTime = '02.00';
const security = null;
console.log({
  title: [title, typeof title],
  subTitle: [subTitle, typeof subTitle],
  peopleCount: [peopleCount, typeof peopleCount],
  isOpen: [isOpen, typeof isOpen],
  closeTime: [closeTime, typeof closeTime],
  security: [security, typeof security],
});
console.groupEnd();
// # sourceMappingURL=primitive-types.js.map
