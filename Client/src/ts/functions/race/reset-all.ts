import { startEngine } from "../engine/start-engine";
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
    const carModel: HTMLElement = item.querySelector('.garage__car')!;
    carModel.classList.remove('garage__car_race');
    carModel.style.transform = 'scale(1.5)';
    carModel.style.animationPlayState = 'running';
    raceButtons.disabled = false;
    // Айди машины
    const carId: HTMLElement = item.querySelector('.garage__car-num')!;
    // Завести машину
    await startEngine(+carId.innerHTML, false);
    hideWinnerBlock();
  });
}

// Спрятать блок
export function hideWinnerBlock() {
  const popup: HTMLElement = document.querySelector('.popup')!;
  popup.style.display = 'none';
  popup.innerHTML = '';
}