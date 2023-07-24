import { Winners } from "../../types/types";

// Получение победителя
export async function getWinner(id: number): Promise<Winners> {
  try { 
    const url = ` http://127.0.0.1:3000/winners/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw(error);
  }
}