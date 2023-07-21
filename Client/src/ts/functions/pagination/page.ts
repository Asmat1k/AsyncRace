import { changeList } from "../generation/generate-garage";

export let currentPage = 1;

export function changeCurrentPage(flag: boolean) {
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