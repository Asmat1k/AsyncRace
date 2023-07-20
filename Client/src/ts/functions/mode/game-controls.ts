import { changeList } from "../generation/generate-garage";
import { updateCars } from "../generation/update-garage";
import { createCar } from "../set/setCar";
import { carModel } from "../storage/car-models";
import { carBrand } from "../storage/car-models";
import { colors } from "../storage/colors";
import { chooseCar } from "../update/choose-car";

// Кнопки управления в гараже
export function gameControls() {
  // Все кнопки управления
  const gameButtons: NodeListOf<HTMLElement> = document.querySelectorAll('.mode__item')!;
  gameButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      if (button.classList.contains('generate')) {
        // Генерация новых машин ПО ТЗ 100 МАШИН
        for (let i = 0; i < 2; i += 1) {
          const carName = `${carBrand[getRandomNum(0, carBrand.length - 1)]} ${carModel[getRandomNum(0, carBrand.length - 1)]}`;
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
    })
  });
}

// Функция рандома для массивов со значениями
function getRandomNum(min: number, max: number) {
  return Math.trunc(Math.random() * (max - min) + min);
}