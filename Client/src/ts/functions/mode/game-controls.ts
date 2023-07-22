import { changeList } from "../generation/generate-garage";
import { startRace } from "../race/race-all";
import { endRace } from "../race/reset-all";
import { createCar } from "../car/set-car";
import { carModel } from "../storage/car-models";
import { carBrand } from "../storage/car-models";
import { colors } from "../storage/colors";

// Кнопки управления в гараже
export function gameControls(): void {
  // Все кнопки управления
  const gameButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.mode__item')!;
  gameButtons.forEach((button: HTMLElement) => {
    button.addEventListener('click', async (event: Event) => {
      const eventTarget: HTMLButtonElement = event.target as HTMLButtonElement;
      // Если это кнопка навигации
      if (button.classList.contains('generate')) {
        // Генерация новых машин ПО ТЗ 100 МАШИН
        for (let i = 0; i < 20; i += 1) {
          // Генерация названия машины
          const carName = `${carBrand[getRandomNum(0, carBrand.length - 1)]} ${carModel[getRandomNum(0, carBrand.length - 1)]}`;
          // Генерация цвета
          const carColor = colors[getRandomNum(0, colors.length)]; 
          // Отправялем в базу
          await createCar({
            name: carName,
            color: carColor,
          })
        }
        // Обновляет список
        await changeList();
      }
      // Если это кнопка гонки
      if (button.classList.contains('race-all')) {
        eventTarget.disabled = true;
        startRace();
      }
      // Если кнопка ресета
      if (button.classList.contains('reset')) {
        eventTarget.disabled = true;
        endRace();
      }
    })
  });
}

// Функция рандома для массивов со значениями
function getRandomNum(min: number, max: number): number {
  return Math.trunc(Math.random() * (max - min) + min);
}