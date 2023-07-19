import { changeList } from "../generation/generate-garage";

export function chooseCar() {
  const cars: NodeListOf<HTMLElement> = document.querySelectorAll('.select')!;
  cars.forEach((car, index) => {
    car.addEventListener('click', async () => {
      await fillCarInfo(index);
    });
  });
}

//!TODO Доделать
export async function fillCarInfo(i: number) {
  const name: HTMLInputElement = document.querySelector('.info__car')!;
  // Блок который хранит текущее id
  const id: HTMLElement = document.querySelector('.info__num')!;
  const num: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__car-num')!;
  //!TODO СДЕЛАТЬ СМЕНУ ЦВЕТА
  try { 
    const url = `http://127.0.0.1:3000/garage/${num[i].innerHTML}`;
    const response = await fetch(url);
    const data = await response.json();
    name.value = data.name;
    id.innerHTML = data.id;
  }
  catch (error) {
    throw(error);
  }
}