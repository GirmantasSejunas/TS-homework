const inputField: HTMLInputElement | null = document.querySelector('#input');
const result: HTMLParagraphElement | null = document.querySelector('#result');

if (inputField === null) throw new Error('neteisingas ivesties selektorius');
if (result === null) throw new Error(' neteisingas rezultatu selektorius');

// eslint-disable-next-line no-undef
const handleFieldChange: EventListener = (event) => {
  const element: HTMLInputElement = event.target as HTMLInputElement;
  result.innerHTML = element.value;
};
inputField.addEventListener('keyup', handleFieldChange);
