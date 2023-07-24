import { Cars } from "../../types/types";
 
// Получение машин
export async function getCars(id: number): Promise<Array<Cars>> {
  try { 
    const url = ` http://127.0.0.1:3000/garage?_page=${id}&_limit=7`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (err) {
    throw(err);
  }
}

// Получение списка машин
export async function getTotalCars(): Promise<Array<Cars>> {
  try { 
    const url = ` http://127.0.0.1:3000/garage`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (err) {
    throw(err);
  }
}