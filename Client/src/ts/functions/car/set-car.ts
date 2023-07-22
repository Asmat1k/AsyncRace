import { Cars } from "../../types/types";
import { updateCars } from "../generation/update-garage";
import { getTotalCars } from "./get-cars";

// Клик на кнопку добавления
export function setCar():void {
  const createButton: HTMLElement = document.querySelector('.create')!;
  const name: HTMLInputElement = document.querySelector('.info__car-new')!;
  const count: HTMLElement = document.querySelector('.garage__all-list')!;
  createButton.addEventListener('click', async (): Promise<void> => {
    // Если есть, что добавлять
    if (name.value.length > 0) {
      // Обьект с параметрами
      await createCar({
        name: name.value,
        //!TODO ПОФИКСИТЬ ВЫБОР ЦВЕТА
        color: 'blue'
      });
      await updateCars();

      // Обновление списка
      let length = (await getTotalCars()).length;
      count.innerHTML = `${length}`;

      // Очистка полсе создания
      name.value = '';
    }
  })
}

// Запись машины в бд
export async function createCar(body: object): Promise<Cars> {
  const url = 'http://127.0.0.1:3000/garage';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
}