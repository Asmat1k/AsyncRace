import { getTotalWinners } from "../API-winners/get-winners";
import { changeWinnersList } from "../generation/generate-winners";
import { winnersPage } from "../pagination/page";

// Хрнят в себе статус нажатия, вынесены к глобальные, тк функция перевызывается
// на новос сгенерированном списке
let isWinsClicked = false;
let isTimeClicked = false;

// Сортировка победителей
export function sortWinnersTable() {
  const sortButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.winner-sort')!;
  sortButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      // Если сортировать по количеству побед
      if (button.classList.contains('winner__wins')) {
        // Меняем статус нажатия
        isWinsClicked = !isWinsClicked;
        changeWinnersList('wins', isWinsClicked ? 'ASC' : 'DESC');  
      }
      // Если сортировать по времени
      if (button.classList.contains('winner__time')) {
        // Меняем статус нажатия
        isTimeClicked = !isTimeClicked;
        changeWinnersList('time', isTimeClicked ? 'ASC' : 'DESC') ;  
      }
    })
  })
}