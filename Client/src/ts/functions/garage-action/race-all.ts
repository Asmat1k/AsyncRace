import { getCar } from "../API-car/get-car";
import { getCars } from "../API-car/get-cars";
import { driveMode } from "../API-engine/drive-engine";
import { startEngine } from "../API-engine/start-engine";
import { currentPage } from "../pagination/page";
import { getWinner } from "../API-winners/get-winner";
import { setWinner } from "../API-winners/set-winner";
import { updateWinner } from "../API-winners/update-winner";

export let score: number = 100;
export let id: number;
export let animated = 0;

// Начало гонки
export function startRace(): void {
  const headerButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.header__item button')!;
  const items: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__item');
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.start')!;
  const stopButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.stop')!;
  const resetButton: HTMLButtonElement = document.querySelector('.reset')!;
  // Индикатор победы, чтобы регистрировалась только самая первая машина
  let win = false;
  animated = 0;
  // Чтобы во время заезда нельзя было поменять страницу 
  buttonsDisable(headerButtons, true);

  items.forEach(async (item: HTMLElement) => {
    // Отключение кнопок старата
    buttonsDisable(startButtons, true);
    // Модель машинки
    const carModel: HTMLElement = item.querySelector('.garage__car')!;
    // Айди машины
    const carId: HTMLElement = item.querySelector('.garage__car-num')!;
    // Завести машину
    const response = await startEngine(+carId.innerHTML, true);
    try {
      // Время
      const time = (response.distance / response.velocity) / 1000;
      // Анимация старт
      carModel.style.animationDuration = `${time}s`;
      carModel.classList.add('garage__car_race');
      // Активировать кнопку остановки гонки только тогла, когда все машины анимированы иначе баганет :)
      animated += 1;
      if (animated === (await getCars(currentPage)).length) {
        resetButton.disabled = false;
      }
      // Включение кнопки
      buttonsDisable(stopButtons, false);
      // Процесс гонки
      await driveMode(+carId.innerHTML);
      // Если никто еще не выиграл и гонка не остановлена, посчитать результат
      if (!win) {
        win = true;
        score = +time.toFixed(2);
        id = +carId.innerHTML;
        // Работа с таблицей победителей и Если машина анимирована
        if (carModel.classList.contains('garage__car_race')) {
          try {
            //? Появляется не моментально как машина выиграла, из-за проверки на остановку, иначе после ресета появится блок о победе
            await showWinnerBlock(id, score);
            // Пробуем установить победителя
            await setWinner({
              id: id,
              wins: 1,
              time: score
            });
            console.log('New winner created!');
            // Если такая машину УЖЕ есть
          } catch (getWinnerError) {  
            // Получаем о ней информацию
            const result = await getWinner(id);
            // Обновляем о ней информацию
            await updateWinner(id, {
              wins: result.wins += 1,
              // Если в этот раз быстрее, то заменить время
              time: score < result.time ? score: result.time,
            });
            // Если кидать ошибку в записи победителя, то сработает try-catch родитель
            console.log('Winner is updated!');
          }
          buttonsDisable(headerButtons, false);
        }
      }
    } catch (driveError) {
      // Если машина анимирована
      if (carModel.classList.contains('garage__car_race')) {
        // Анимация конец при остановке двигателя
        carModel.style.transform = 'scale(1.5) rotate(10deg)';
        carModel.style.animationPlayState = 'paused';
      }
      // Кинуть ошибку
      // throw (driveError);
    }
    buttonsDisable(headerButtons, false);
  });
}

// Показ блока победы
export async function showWinnerBlock(id: number, time: number): Promise<void> {
  const popup: HTMLElement = document.querySelector('.popup')!;
  const car = await getCar(id);
  popup.innerHTML = '';
  popup.style.display = 'block';
  popup.innerHTML = 
  `<div class="popup__container">
    <div class="popup__body">
      <div class="popup__info">Winner: <span class="popup-name">${car.name}</span></div>
      <div class="popup__info">Time: <span class="popup-time">${time}</span></div>  
    </div>
  </div>`;
}

// Регулировка режима кнопок
export function buttonsDisable(items: NodeListOf<HTMLButtonElement>, flag: boolean) {
  items.forEach((item) => {
    item.disabled = flag;
  });
}