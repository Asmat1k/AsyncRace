import { Cars } from "../../types/types";
import { updateCars } from "../generation/update-garage";

// Клик на кнопку добавления
export function setCar():void {
  const createButton: HTMLElement = document.querySelector('.create')!;
  const name: HTMLInputElement = document.querySelector('.info__car-new')!;
  createButton.addEventListener('click', async () => {
    // Обьект с параметрами
    if(name.value.length > 0) {
      await createCar({
        name: name.value,
        //!TODO ПОФИКСИТЬ ВЫБОР ЦВЕТА
        color: 'blue'
      });
      await updateCars();
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