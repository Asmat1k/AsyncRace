import { Winners } from "../../types/types";

// Получение списка машин
export async function getTotalWinners(page: number, sort: string, order: string): Promise<Array<Winners>> {
  try { 
    const url = ` http://127.0.0.1:3000/winners?_page=${page}&_limit=${sort}&_sort${sort}&_order=${order}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw(error);
  }
}

export async function getAllWinners(): Promise<Array<Winners>> {
  try { 
    const url = ` http://127.0.0.1:3000/winners`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw(error);
  }
}