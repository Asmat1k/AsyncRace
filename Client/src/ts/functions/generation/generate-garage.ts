import { getCars, getTotalCars } from "../car/get-cars";
import { gameControls } from "../mode/game-controls";
import { currentPage } from "../pagination/page";
import { slideGaragePagination } from "../pagination/pagination-garage";
import { carRace } from "../race/race";
import { setCar } from "../car/set-car";
import { chooseCar } from "../update/choose-car";
import { upadteCar } from "../car/upadte-car";
import { changePage } from "./change-page";

// Отрисовка гаража
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
        <div class="info__item">
          <input type="text" placeholder="Car name" maxlength="30" class="info__input info__car-new">
          <div class="info__color">
            <div class="info__color-cur"></div>
          </div>
          <button class="info__button create">Create</button>
        </div>
        <div class="info__item">
          <input type="text" placeholder="New car name" maxlength="30" class="info__input info__car">
          <div class="info__color">
            <div class="info__color-cur"></div>
          </div>
          <button class="info__button update">Update</button>
          <h3 class="info__num"></h3>
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
        <button class="mode__item race-all">RACE</button>
        <button class="mode__item reset" disabled>RESET</button>
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
      <div class="garage__page">Page #<span class="garage__cur-page">${currentPage}</span> </div>  
    </div>
    <ul class="garage__list">
    </ul>
    <div class="garage__pag-controls">
      <button class="garage__button pagination prev">PREV</button>
      <button class="garage__button pagination next">NEXT</button>
    </div>
    </div>
  </div>`;
  page.appendChild(garage);

  const popup: HTMLElement = document.createElement('section');
  popup.classList.add('popup');
  popup.innerHTML = 
  `<div class="popup__container">
    <div class="popup__body">
      <div class="popup__info">Winner: <span class="popup-name">NAME</span></div>
      <div class="popup__info">Time: <span class="popup-time">2:30</span></div>  
    </div>
  </div>`;
  page.appendChild(popup);

  wrapper.appendChild(page);

  document.body.append(wrapper);
  
  changeList();
  // Вешаем прослушку на кнопки
  changePage();
  // Добавить машину
  setCar();
  // Обновление машины
  upadteCar();
  // Генерация машины
  gameControls();
  // Паштнация
  slideGaragePagination();
}

// Заполнение списка машин
export async function changeList(): Promise<void> {
  const list: HTMLElement = document.querySelector('.garage__list')!;
  const count: HTMLElement = document.querySelector('.garage__all-list')!;
  list.innerHTML = '';
  // 7 машин на страницу
  // Количество машин
  count.innerHTML = `${(await getTotalCars()).length}`;
  // 7 на страницу
  let length: number = (await getCars(currentPage)).length;
  length = length > 7 ? 7 : length;
  for(let i = 0; i < length; i += 1) {
    const car: HTMLElement = await getGarageCar(i);
    list.appendChild(car);
  }
  // Прослшушка на машины
  chooseCar();
  // Управление машиной
  carRace();
}

// Заполнение машины
export async function getGarageCar(i: number): Promise<HTMLElement> {
  const car: HTMLElement = document.createElement('li');
  car.classList.add('garage__item');
  try {
    const cars = await getCars(currentPage);
    car.innerHTML = 
    `<div class="garage__controls">
      <div class="garage__buttons">
        <button class="garage__button controls select">SELECT</button>
        <button class="garage__button controls remove">REMOVE</button>
      </div>
      <h2 class="garage__car-name">${cars[i].name}</h2>
      <h3 class="garage__car-num">${cars[i].id}</h3>
    </div>
    <div class="garage__race">
      <div class="garage__pit">
        <div class="garage__start-stop">
          <button class="garage__button race start">GO</button>
          <button class="garage__button race stop" disabled>STOP</button>
        </div>
      </div>
      <div class="garage__road">
        <div class="garage__car">
          <i class="fa-solid fa-car-side fa-2xl" style="color: ${cars[i].color};"></i>
        </div>
        <div class="garage__finish">
          <i class="fa-solid fa-flag-checkered fa-2xl" style="color: #ffffff;"></i>
        </div>  
      </div>
    </div>`;
    return car;
  } catch(error) {
    throw(error);
  }
}