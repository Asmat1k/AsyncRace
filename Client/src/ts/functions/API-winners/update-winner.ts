import { UpdatedWinner } from "../../types/types";

// Обновление информации победителя
export async function updateWinner(id: number, body: object): Promise<UpdatedWinner> {
  try { 
    const url = ` http://127.0.0.1:3000/winners/${id}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw(error);
  }
}