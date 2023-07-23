import { Winners } from "../../types/types";

// Получение списка машин
export async function setWinner(body: object): Promise<Winners> {
  try { 
    const url = `http://127.0.0.1:3000/winners`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error) {
    throw(error);
  }
}