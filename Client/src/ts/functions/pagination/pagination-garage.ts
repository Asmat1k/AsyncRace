import { getCars } from "../API-car/get-cars";
import { hideWinnerBlock } from "../garage-action/reset-all";
import { changeGarageCurrentPage, currentPage } from "./page";

// Пагинация
export function slideGaragePagination() {
  const pagButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.pagination')!;
  const resetButton: HTMLButtonElement = document.querySelector('.reset')!;
  const raceButton: HTMLButtonElement = document.querySelector('.race-all')!;
  // Добавление прослушки на кнопки
  pagButtons.forEach(button => {
    button.addEventListener('click', () => {
      hideWinnerBlock();
      resetButton.disabled = true;
      raceButton.disabled = false;
      if (button.classList.contains('next')) {
        changeGarageCurrentPage(true);
      }
      if (button.classList.contains('prev')) {
        changeGarageCurrentPage(false);
      }
    });
  })
}

// Регулировка активности кнопок пагинации
export async function garagePaginationButtons(className: string) {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(className)!;
  // Активность кнопок пагинации
  if(currentPage - 1 === 0) {
    buttons[0].disabled = true;
  } else {
    buttons[0].disabled = false;
  }
  if ((await getCars(currentPage + 1)).length <= 0) {
    buttons[1].disabled = true;
  } else {
    buttons[1].disabled = false;
  }
}