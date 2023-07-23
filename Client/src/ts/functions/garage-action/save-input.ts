export let createInput: string = '';
export let updateInput: string = '';
export let colorCreate: string = '#6452F9';
export let colorUpdate: string = '#E6C78C';

export function saveInput() {
  const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input')!;
  inputs.forEach((input) => {
    input.addEventListener('blur', () => {
      if (input.classList.contains('info__car-new')) {
        createInput = input.value;
      }
      if (input.classList.contains('info__car')) {
        updateInput = input.value;
      }
      if (input.classList.contains('set-color')) {
        colorCreate = input.value;
      }
      if (input.classList.contains('update-color')) {
        colorUpdate = input.value;
      }
    })
  })
}