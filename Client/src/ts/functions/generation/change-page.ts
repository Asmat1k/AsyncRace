import { getPages } from "./generate-garage";
import { getWinnersPage } from "./generate-winners";

export function changePage(): void {
  const winnersButton: HTMLElement = document.querySelector('.winners')!;
  const garageButton: HTMLElement = document.querySelector('.gar')!;
  winnersButton.addEventListener('click', () => { 
    getWinnersPage();
  });
  garageButton.addEventListener('click', () => {
    getPages();
  })
}