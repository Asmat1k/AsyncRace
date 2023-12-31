import { Cars } from "../../types/types";
import { choosedCarId, isCarChoosed, resetCarChoosed } from "../garage-action/choose-car";
import { changeList } from "../generation/generate-garage";

// Функция обновления машины
export function upadteCar(): void {
  const updateButton: HTMLElement = document.querySelector('.update')!;
  const name: HTMLInputElement = document.querySelector('.info__car')!;
  const color: HTMLInputElement = document.querySelector('.update-color')!;
  updateButton?.addEventListener('click', async (): Promise<void> => {
    if (name.value.length > 0 && isCarChoosed) {
      // данные, которые хоти обновить
      await updateItem({
        name: name.value,
        color: color.value,
      }, choosedCarId.toString());
      // Скидываем проверку, так как машина обновилась
      resetCarChoosed();
      // обновляем список
      await changeList();
      // Очистка поля ввода
      name.value = '';
    }
  });
}

// Обновление записи
async function updateItem(body: object, id: string): Promise<Cars> {
  // Обращение по id
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
}