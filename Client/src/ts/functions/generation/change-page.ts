import { getPages } from "./generate-garage";
import { getWinnersPage } from "./generate-winners";

export function changePage(): void {
  const winnersButton: HTMLElement = document.querySelector('.winners')!;
  const garageButton: HTMLElement = document.querySelector('.gar')!;
  // Перерисовка страниц по нажатию
  winnersButton.addEventListener('click', (): void => { 
    getWinnersPage();
  });
  garageButton.addEventListener('click', (): void => {
    getPages();
  })
}