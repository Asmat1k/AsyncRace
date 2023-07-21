import { driveMode, startEngine } from "./race";

export let score: number = 10000;
export let name: string;

// Начало гонки
export function startRace() {
  const items: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__item');
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.start')!;
  const stopButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.stop')!;
  const resetButton: HTMLButtonElement = document.querySelector('.reset')!;
  items.forEach(async (item) => {
    buttonsDisable(startButtons, true);
    const carName: HTMLElement = item.querySelector('.garage__car-name')!;
    // Модель машинки
    const car: HTMLElement = item.querySelector('.garage__car')!;
    // Айди машины
    const carId: HTMLElement = item.querySelector('.garage__car-num')!;
    // Завести машину
    const response = await startEngine(+carId.innerHTML, true);
    try {
      // Время
      const time = (response.distance / response.velocity) / 1000;
      if(time < score) {
        score = time;
        name = carName.innerHTML;
      }
      // Анимация старт
      car.style.animationDuration = `${time}s`;
      car.classList.add('garage__car_race');
      resetButton.disabled = false;
      // Включение кнопки
      buttonsDisable(stopButtons, false);
      await driveMode(+carId.innerHTML);
    } catch (driveError) {
      // Анимация конец при остановке двигателя
      car.style.animationPlayState = 'paused';
      throw (driveError);
    }
    console.log(`${name} - ${score.toFixed(2)}`);
  });
}

// Регулировка режима кнопок
export function buttonsDisable(items: NodeListOf<HTMLButtonElement>, flag: boolean) {
  items.forEach((item) => {
    item.disabled = flag;
  });
}