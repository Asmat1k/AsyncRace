import { Cars } from "../../types/types";
import { changeList } from "../generation/generate-garage";

// Удаление записи
export async function deleteCar(id: number): Promise<Cars> {
  // Обращение по id
  const url = `http://127.0.0.1:3000/garage/${id}`;
  const response = await fetch(url, {
    method: 'DELETE',
  });
  const car = await response.json();
  // Перерисовка списка
  await changeList();
  return car;
}