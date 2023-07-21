import { Cars } from "../../types/types";

export function carRace() {
  const raceButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.race')!;
  const nums: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__car-num')!;
  const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__car')!;
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.start')!;
  const stopButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.stop')!;
  raceButtons.forEach((button, index) => {
    button.addEventListener('click', async (event: Event) => {
      const eventTarget: HTMLButtonElement = event.target as HTMLButtonElement;
      // Отключение кнопки
      eventTarget.disabled = true;
      // Если это кнопка старта
      if (button.classList.contains('start')) {
        try {
          // Ответ об заведенном двигателе
          const response = await startEngine(+nums[index / 2].innerHTML, true);
          // Ожидаем
          try {
            // Расчет времени
            const time = response.distance / response.velocity;
            // Анимация заезда
            cars[index / 2].style.animationDuration = `${time / 1000}s`;
            cars[index / 2].classList.add('garage__car_race');
            // Отключение кнопки
            stopButtons[index / 2].disabled = false;
            // Результат заезда
            const result = await driveMode(+nums[index /   2].innerHTML);
            if (!result) {
            // Отключаем кнопку остановки двигателя
            stopButtons[index / 2].disabled = false;
            }
          } catch(driveError) {
            // Останавливаем анимацию
            cars[index / 2].style.animationPlayState = 'paused';
            throw (driveError);
          }
        } catch (EngineStartError) {
          throw (EngineStartError);
        }
      }
      // Если кнопка стопа
      if (button.classList.contains('stop')) {
        await startEngine(+nums[Math.floor(index / 2)].innerHTML, false);
        // Убрать анимацию
        cars[Math.floor(index / 2)].classList.remove('garage__car_race');
        // Отключить кнопку стопа
        eventTarget.disabled = true;
        // Включить кнопку старта
        startButtons[Math.floor(index / 2)].disabled = false;
      }
    });
  })
}

// Запуск двигателя
export async function startEngine(id: number, status: boolean) {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=${status ? 'started' : 'stopped'}`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  const data = await response.json();
  return data;
}

// Запуск двигателя
export async function driveMode(id: number): Promise<Cars> {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  const data = await response.json();
  // console.log(data);
  return data;
}