import { Cars } from "../../types/types";
import { changeList } from "../generation/generate-garage";

// Функция обновления машины
export function upadteCar() {
  const updateButton: HTMLElement = document.querySelector('.update')!;
  const name: HTMLInputElement = document.querySelector('.info__car')!;
  const id: HTMLElement = document.querySelector('.info__num')!;
  updateButton?.addEventListener('click', async () => {
    if(name.value.length > 0) {
      // данные, которые хоти обновить
      await updateItem({
        name: name.value,
        color: 'green'
      }, id.innerHTML);
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