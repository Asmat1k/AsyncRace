import { changeCurrentPage } from "./page";

// Пагинация
export function slidePagination() {
  const pagButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.pagination')!;
  // Добавление прослушки на кнопки
  pagButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('next')) {
        changeCurrentPage(true);
      }
      if (button.classList.contains('prev')) {
        changeCurrentPage(false);
      }
    });
  })
}