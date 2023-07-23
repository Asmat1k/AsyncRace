import { buttonsDisable } from "../garage-action/race-all";
import { hideWinnerBlock } from "../garage-action/reset-all";
import { changeGarageCurrentPage } from "./page";

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