/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */


console.group('1. Dėklo (Stack) duomenų struktūros kūrimas');
{
  /*
    Perskaitykite: https://runestone.academy/ns/books/published/pythonds/BasicDS/WhatisaStack.html
  */

    class Stack<T> {
        private index: number;
    
        [i: number]: T | undefined;
    
        constructor() { this.index = -1; }
    
        get length() {
          return this.index + 1;
        }
    
        push(data: T) {
          this.index += 1;
          this[this.index] = data;
        }
    
        pop(): T | undefined {
          const returnVal = this[this.index];
          if (returnVal !== undefined) {
            delete this[this.index];
            this.index -= 1;
          }
    
          return returnVal;
        }
      }

      const numberStack = new Stack();
      const stringStack = new Stack();

  
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    console.log({
        numberStack,
        stringStack,
      });
  }
  console.groupEnd();

  
  console.groupCollapsed('1.2. Sukurkite metodą "push", kuris pridėtų elementą į struktūros galą, t.y.: vienetu didesniu indeksu nei dabartinis index. Po pridėjimo index savybę padidinkite vienetu');
  {
    numberStack.push(3);
    numberStack.push(4);
    numberStack.push(5);

    stringStack.push('labas');
    stringStack.push('rytas');
    stringStack.push('suraitytas');

    console.log({
      numberStack,
      stringStack,
    });
  }
  console.groupEnd();

  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros galo. Po išėmimo index savybę sumažinkite vienetu');
  {
    const lastNumber = numberStack.pop();
    const lastString = stringStack.pop();

    console.log({
      lastNumber,
      lastString,
    });
  }
  console.groupEnd();


  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log({
        'numberStack.ilgis': numberStack.length,
        'stringStack.ilgis': stringStack.length,
      });
  }
  console.groupEnd();
}
console.groupEnd();

console.group('2. Eilės (Queue) duomenų struktūros kūrimas');
{
    class Queue<T> {
        private index: number;
    
        [i: number]: T | undefined;
    
        constructor() { this.index = -1; }
    
        get length() {
          return this.index + 1;
        }
    
        enqueue(data: T) {
          for (let i = this.index; i >= 0; i -= 1) {
            this[i + 1] = this[i];
          }
    
          this[0] = data;
          this.index += 1;
        }
    
        dequeue(): T | undefined {
          const returnVal = this[0];
          for (let i = 1; i <= this.index; i += 1) {
            this[i - 1] = this[i];
          }
    
          delete this[this.index];
          this.index -= 1;
    
          return returnVal;
        }
      }
      
    
      const numberQueue = new Queue();
      const stringQueue = new Queue();

 
    
  console.groupCollapsed('1.1. sukurkite konstruktorių, kuris nustatytų privačią savybę "index" į -1');
  {
    console.log({
        numberStack: numberQueue,
        stringStack: stringQueue,
      });
  }
  console.groupEnd();


  console.groupCollapsed('1.2. Sukurkite metodą "enqueue", kuris pridėtų elementą į struktūros priekį. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
  {
    numberQueue.enqueue(1);
    numberQueue.enqueue(2);
    numberQueue.enqueue(3);

    stringQueue.enqueue('10');
    stringQueue.enqueue('11');
    stringQueue.enqueue('12');

    console.log({
      numberStack: numberQueue,
      stringStack: stringQueue,
    });
  }
  console.groupEnd();

  console.groupCollapsed('1.3. Sukurkite metodą "pop", kuris išimtų elementą iš struktūros priekio. Užtikrinkite kad kiti duomenys tavrkingai persislinktų ir indeksuotūsi');
  {
    const lastNumber = numberQueue.dequeue();
    const lastString = stringQueue.dequeue();

    console.log({
      lastNumber,
      lastString,
    });
  }
  console.groupEnd();

  console.groupCollapsed('1.4. Sukurkite get\'erį "length", kuris grąžintų elementų kiekį struktūroje');
  {
    console.log({
        'numberQueue.ilgis': numberQueue.length,
        'stringQueue.ilgis': stringQueue.length,
      });
  }
  console.groupEnd();
}
console.groupEnd();