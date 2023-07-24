import { getCars } from "../API-car/get-cars";
import { getTotalCars } from "../API-car/get-cars";
import { getTotalWinners } from "../API-winners/get-winners";
import { changeList } from "../generation/generate-garage";
import { changeWinnersList } from "../generation/generate-winners";

export let currentPage = 1;

export let winnersPage = 1;

export async function changeGarageCurrentPage(flag: boolean) {
  const page: HTMLElement = document.querySelector('.garage__cur-page')!;
  // Флаг отвечает за нарпаление прокрутки страницы тру - вперед, фалс - назад )
  if (flag) {
    if ((await getCars(currentPage + 1)).length > 0) {
      currentPage += 1;
      // Перезагрузка списка
      changeList();
    }
  } else {
    if (currentPage > 1) {
      currentPage -= 1;
      // Перезагрузка списка
      changeList();
    }
  }
  page.innerHTML = `${currentPage}`;
}

export async function changeWinnersCurrentPage(flag: boolean) {
  const page: HTMLElement = document.querySelector('.winner__page')!;
  // Флаг отвечает за нарпаление прокрутки страницы тру - вперед, фалс - назад )
  if (flag) {
    if ((await getTotalWinners(winnersPage + 1, 'id', 'ASC')).length > 0) {
      winnersPage += 1;
      // Перезагрузка списка
      changeWinnersList();
    }
  } else {
    if (winnersPage > 1) {
      winnersPage -= 1;
      // Перезагрузка списка
      changeWinnersList();
    }
  }
  page.innerHTML = `${winnersPage}`;
}