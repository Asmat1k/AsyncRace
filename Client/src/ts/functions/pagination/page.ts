import { changeList } from "../generation/generate-garage";
import { changeWinnersList } from "../generation/generate-winners";

export let currentPage = 1;

export let winnersPage = 1;

export function changeGarageCurrentPage(flag: boolean) {
  const page: HTMLElement = document.querySelector('.garage__cur-page')!;
  // Флаг отвечает за нарпаление прокрутки страницы тру - вперед, фалс - назад )
  if (flag) {
    currentPage += 1;
    // Перезагрузка списка
    changeList();
  } else {
    if (currentPage > 1) {
      currentPage -= 1;
      // Перезагрузка списка
      changeList();
    }
  }
  page.innerHTML = `${currentPage}`;
}

export function changeWinnersCurrentPage(flag: boolean) {
  const page: HTMLElement = document.querySelector('.winner__page')!;
  // Флаг отвечает за нарпаление прокрутки страницы тру - вперед, фалс - назад )
  if (flag) {
    winnersPage += 1;
    // Перезагрузка списка
    changeWinnersList();
  } else {
    if (winnersPage > 1) {
      winnersPage -= 1;
      // Перезагрузка списка
      changeWinnersList();
    }
  }
  page.innerHTML = `${winnersPage}`;
}