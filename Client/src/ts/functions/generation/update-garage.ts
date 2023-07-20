import { getCars } from "../get/get-cars";
import { currentPage } from "../pagination/page";
import { chooseCar } from "../update/choose-car";
import { getGarageCar } from "./generate-garage";

// Обновление гаража
export async function updateCars(): Promise<void> {
  const list: HTMLElement = document.querySelector('.garage__list')!;
  // Добавить элемент последним
  const last = (await getCars(currentPage)).length;
  const car: HTMLElement = await getGarageCar(last - 1);
  list.appendChild(car);
  // Вешаем на новую машину обработчик
  await chooseCar();
}