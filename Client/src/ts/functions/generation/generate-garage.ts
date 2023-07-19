import { changePage } from "./change-page";

export function getPages(): void {
  document.body.innerHTML = '';
  // Создание оболочки
  const wrapper: HTMLElement = document.createElement('div');
  wrapper.classList.add('wrapper');

  // Создание хедера
  const header: HTMLElement = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = 
  `<div class="header__container">
    <div class="header__body">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__item gar">GARAGE</li>
          <li class="header__item winners">WINNERS</li>
        </ul>
      </nav>
    </div>
  </div>`;

  wrapper.appendChild(header);
  
  // Создание page
  const page: HTMLElement = document.createElement('main');
  page.classList.add('page');

  // Создание полей ввода
  const input: HTMLElement = document.createElement('section');
  input.classList.add('info');
  input.innerHTML = 
  `<div class="info__container">
    <div class="info__body">
      <div class="info__list">
        <div class="info__item create">
          <input type="text" placeholder="Car name" maxlength="30" class="info__input">
          <div class="info__color">
            <div class="info__color-cur"></div>
          </div>
          <button class="info__button">Create</button>
        </div>
        <div class="info__item update">
          <input type="text" placeholder="New car name" maxlength="30" class="info__input">
          <div class="info__color">
            <div class="info__color-cur"></div>
          </div>
          <button class="info__button">Update</button>
        </div>
      </div>
    </div>
  </div>`;
  page.appendChild(input);

  // Cоздание кнопок заезда и генерации
  const mode: HTMLElement = document.createElement('section');
  mode.classList.add('mode');
  mode.innerHTML = 
  `<div class="mode__container">
    <div class="mode__body">
      <div class="mode__list">
        <button class="mode__item race">RACE</button>
        <button class="mode__item reset">RESET</button>
        <button class="mode__item generate">GENERATE</button>
      </div>
    </div>
  </div>`;
  page.appendChild(mode);

  // Создание гаража 
  const garage: HTMLElement = document.createElement('section');
  garage.classList.add('garage');
  garage.innerHTML = 
  `<div class="garage__container">
  <div class="garage__body">
    <div class="garage__info">
      <div class="garage__title">Garage(<span class="garage__all-list">1</span>)</div>
      <div class="garage__page">Page #<span class="garage__cur-page">1</span> </div>  
    </div>
    <ul class="garage__list">
    </ul>
    <div class="garage__pag-controls">
      <button class="garage__button prev">PREV</button>
      <button class="garage__button next">NEXT</button>
    </div>
    </div>
  </div>`;
  page.appendChild(garage);

  wrapper.appendChild(page);

  document.body.append(wrapper);
  
  changeList();
  // Вешаем прослушку на кнопки
  changePage();
}

// Заполнение списка машин
function changeList(): void {
  const list: HTMLElement = document.querySelector('.garage__list')!;
  // 10 машин на страницу
  for(let i = 0; i < 5; i += 1) {
    const car: HTMLElement = getGarageCar();
    list.appendChild(car);
  }
}

// Заполнение машины
export function getGarageCar(): HTMLElement {
  const car: HTMLElement = document.createElement('li');
  car.classList.add('garage__item');
  car.innerHTML = 
  `<div class="garage__controls">
    <button class="garage__button select">SELECT</button>
    <button class="garage__button remove">REMOVE</button>
    <h2 class="garage__car-name">Tesla</h2>
  </div>
  <div class="garage__race">
    <div class="garage__pit">
      <div class="garage__start-stop">
        <button class="garage__button race">GO</button>
        <button class="garage__button stop">STOP</button>
      </div>
    </div>
    <div class="garage__road">
      <div class="garage__car">
        <i class="fa-solid fa-car-side fa-2xl" style="color: #ffffff;"></i>
      </div>
      <div class="garage__finish">
        <i class="fa-solid fa-flag-checkered fa-2xl" style="color: #ffffff;"></i>
      </div>  
    </div>
  </div>`;
  return car;
}