import { getCar } from "../API-car/get-car";
import { slideWinnersPagination, winnnersPaginationButtons } from "../pagination/pagination-winners";
import { winnersPage } from "../pagination/page";
import { getAllWinners, getTotalWinners } from "../API-winners/get-winners";
import { sortWinnersTable } from "../winnners-action/sort-winners";

// Страница с победителями
export function getWinnersPage(): void {
  // Создание page
  const page: HTMLElement = document.querySelector('.page')!;
  page.innerHTML = '';

  // Создание полей ввода
  const leader: HTMLElement = document.createElement('section');
  leader.classList.add('winner');
  leader.innerHTML = 
  `<div class="winner__container">
    <div class="winner__body">
      <div class="winner__info">
        <h2 class="winner__title">Winners (<span class="winner__count">-</span>)</h2>
        <h3 class="winner__subtitle">Page (<span class="winner__page">${winnersPage}</span>)</h3>
      </div>
      <div class="winner__table">
        <ul class="winner__list">
        </ul>
      </div>
      <div class="winner__controls">
        <button class="winner__button prev">PREV</button>
        <button class="winner__button next">NEXT</button>
      </div>
    </div>
  </div>`;
  page.appendChild(leader);

  // Заполнение таблицы
  changeWinnersList();
  // Пагинация
  slideWinnersPagination();
}

// Заполнение списка машин победителей
export async function changeWinnersList(sort?: string, order?: string): Promise<void> {
  const list: HTMLElement = document.querySelector('.winner__list')!;
  const count: HTMLElement = document.querySelector('.winner__count')!;
  list.innerHTML = '';
  const listHeader: HTMLElement = document.createElement('li')!;
  listHeader.classList.add('winner__item');
  listHeader.classList.add('winner__header');
  listHeader.innerHTML = 
  `<div class="winner__number">Number</div>
  <div class="winner__car">Car</div>
  <div class="winner__name">Name</div>
  <div class="winner__wins winner-sort">Wins</div>
  <div class="winner__time winner-sort">Best time</div>`;
  list.appendChild(listHeader);

  count.innerHTML = `${(await getAllWinners()).length}`;
  let length: number = (await getTotalWinners(winnersPage, 'id', 'ASC')).length;
  // 10 машин на страницу
  for(let i = 0; i < length; i += 1) {
    const car: HTMLElement = await getWinnersCar(i, sort, order);
    list.appendChild(car);
  }

  await winnnersPaginationButtons('.winner__button');
  
  sortWinnersTable();
}

// Заполнение машины
export async function getWinnersCar(i: number, sort?: string, order?: string): Promise<HTMLElement> {
  const car: HTMLElement = document.createElement('li');
  car.classList.add('garage__item');
  try {
    const result = await getTotalWinners(winnersPage, sort!, order!);
    const carParams = await getCar(result[i].id);
    car.innerHTML = 
    `<li class="winner__item">
      <div class="winner__number">${i + 1}</div>
      <div class="winner__car">
        <i class="fa-solid fa-car-side fa-2xl" style="color: ${carParams.color};"></i>
      </div>
      <div class="winner__name">${carParams.name}</div>
      <div class="winner__wins">${result[i].wins}</div>
      <div class="winner__time">${result[i].time}</div>
    </li>`;
    return car;
  } catch (error) {
    throw (error);
  }
}

