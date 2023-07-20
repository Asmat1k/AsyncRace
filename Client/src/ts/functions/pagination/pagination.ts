import { changeCurrentPage } from "./page";

export function slidePagination() {
  const pagButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__button')!;
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