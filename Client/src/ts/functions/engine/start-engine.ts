import { StartStop } from "../../types/types";

// Запуск двигателя
export async function startEngine(id: number, status: boolean): Promise<StartStop> {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=${status ? 'started' : 'stopped'}`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  const data = await response.json();
  return data;
}