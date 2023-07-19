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
        <h2 class="winner__title">Winners (<span class="winner__count">1</span>)</h2>
        <h3 class="winner__subtitle">Page (<span class="winner__page">1</span>)</h3>
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
  
  changeWinnersList();
}

// Заполнение списка машин
function changeWinnersList(): void {
  const list: HTMLElement = document.querySelector('.winner__list')!;
  const listHeader: HTMLElement = document.createElement('li');
  listHeader.classList.add('winner__item');
  listHeader.classList.add('winner__header');
  listHeader.innerHTML = 
  ` <div class="winner__number">Number</div>
  <div class="winner__car">Car</div>
  <div class="winner__name">Name</div>
  <div class="winner__wins">Wins</div>
  <div class="winner__time">Best time</div>`;
  list.appendChild(listHeader);
  // 10 машин на страницу
  for(let i = 0; i < 5; i += 1) {
    const car: HTMLElement = getWinnersCar(i);
    list.appendChild(car);
  }
}

// Заполнение машины
export function getWinnersCar(i: number): HTMLElement {
  const car: HTMLElement = document.createElement('li');
  car.classList.add('garage__item');
  car.innerHTML = 
  `<li class="winner__item">
    <div class="winner__number">${i + 1}</div>
    <div class="winner__car">
      <i class="fa-solid fa-car-side fa-2xl" style="color: #ffffff;"></i>
    </div>
    <div class="winner__name">Tesla</div>
    <div class="winner__wins">1</div>
    <div class="winner__time">10</div>
  </li>`;
  return car;
}