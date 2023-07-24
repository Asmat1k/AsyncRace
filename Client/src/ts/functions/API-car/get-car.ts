import { Cars } from "../../types/types";
 
// Получение машины 
export async function getCar(id: number): Promise<Cars> {
  try { 
    const url = ` http://127.0.0.1:3000/garage/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (err) {
    throw(err);
  }
}