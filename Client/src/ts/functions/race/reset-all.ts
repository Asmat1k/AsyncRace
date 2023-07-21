import { driveMode, startEngine } from "./race";
import { buttonsDisable } from "./race-all";

export let winners: Array<number> = [];

// Конец гонки
//! TODO Пофиксить окончание гонки
export function endRace(): void {
  const items: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__item')!;
  const startButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.start')!;
  const stopButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.stop')!;
  const raceButtons: HTMLButtonElement = document.querySelector('.race-all')!;
  
  items.forEach(async (item: HTMLElement): Promise<void> => {
    buttonsDisable(startButtons, false);
    buttonsDisable(stopButtons, true);
    // Модель машинки
    const car: HTMLElement = item.querySelector('.garage__car')!;
    car.classList.remove('garage__car_race');
    raceButtons.disabled = false;
    // Айди машины
    const carId: HTMLElement = item.querySelector('.garage__car-num')!;
    // Завести машину
    await startEngine(+carId.innerHTML, false);
  });
}
