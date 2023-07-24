import { getTotalWinners } from "../API-winners/get-winners";
import { changeWinnersCurrentPage, winnersPage } from "./page";

// Пагинация
export function slideWinnersPagination() {
  const pagButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.winner__button')!;
  // Добавление прослушки на кнопки
  pagButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('next')) {
        changeWinnersCurrentPage(true);
      }
      if (button.classList.contains('prev')) {
        changeWinnersCurrentPage(false);
      }
    });
  })
}

// Регулировка активности кнопок пагинации
export async function winnnersPaginationButtons(className: string) {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(className)!;
  // Активность кнопок пагинации
  if(winnersPage - 1 === 0) {
    buttons[0].disabled = true;
  } else {
    buttons[0].disabled = false;
  }
  if ((await getTotalWinners(winnersPage + 1, 'id', 'ASC')).length <= 0) {
    buttons[1].disabled = true;
  } else {
    buttons[1].disabled = false;
  }
}