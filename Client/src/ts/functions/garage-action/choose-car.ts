import { changeList } from "../generation/generate-garage";
import { deleteCar } from "../API-car/delete-car";
import { deleteWinner } from "../API-winners/delete-winner";

export let isCarChoosed = false;

// Кнопки управления модификацией и удалением машины
export function chooseCar(): void {
  const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('.controls')!;
  const nums: NodeListOf<HTMLElement> = document.querySelectorAll('.garage__car-num')!;
  buttons.forEach((button: HTMLElement, index: number) => {
    button.addEventListener('click', async (): Promise<void> => {
      // Если клик по кнопке выбора, они имеют четный индекс, поэтому они отлавливаются по делению
      if (button.classList.contains('select')) {
        isCarChoosed = !isCarChoosed;
        await fillCarInfo(+nums[index / 2].innerHTML);
      }
      // Если клик по кнопке удаления, они имет не четный индекс
      if (button.classList.contains('remove'))  {
        await deleteCar(+nums[index % 2 > 0 ? Math.floor(index / 2) : index].innerHTML);
        // Удаляем из победителей
        await deleteWinner(+nums[index % 2 > 0 ? Math.floor(index / 2) : index].innerHTML);
      }
    });
  });
}

// Заполнение информации
export async function fillCarInfo(i: number): Promise<void> {
  const name: HTMLInputElement = document.querySelector('.info__car')!;
  const color: HTMLInputElement = document.querySelector('.update-color')!;
  // Блок который хранит текущее id
  const id: HTMLElement = document.querySelector('.info__num')!;
  try { 
    const url = `http://127.0.0.1:3000/garage/${i}`;
    const response = await fetch(url);
    const data = await response.json();
    name.value = data.name;
    color.value = data.color;
    id.innerHTML = data.id;
  }
  catch (error) {
    throw(error);
  }
}

export function resetCarChoosed() {
  isCarChoosed = false;
}