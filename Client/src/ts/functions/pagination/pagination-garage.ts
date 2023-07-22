import { changeGarageCurrentPage } from "./page";

// Пагинация
export function slideGaragePagination() {
  const pagButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.pagination')!;
  // Добавление прослушки на кнопки
  pagButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('next')) {
        changeGarageCurrentPage(true);
      }
      if (button.classList.contains('prev')) {
        changeGarageCurrentPage(false);
      }
    });
  })
}