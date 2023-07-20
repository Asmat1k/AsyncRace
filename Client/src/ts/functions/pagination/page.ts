import { changeList } from "../generation/generate-garage";

export let currentPage = 1;

export function changeCurrentPage(flag: boolean) {
  const page: HTMLElement = document.querySelector('.garage__cur-page')!;
  if (flag) {
    currentPage += 1;
  } else {
    if (currentPage > 0) currentPage -= 1;
  }
  page.innerHTML = `${currentPage}`;
  changeList();
}