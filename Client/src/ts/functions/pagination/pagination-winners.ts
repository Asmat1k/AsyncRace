import { changeWinnersCurrentPage } from "./page";

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