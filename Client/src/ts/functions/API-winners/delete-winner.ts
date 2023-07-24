// Получение списка машин
export async function deleteWinner(id: number): Promise<object> {
  try { 
    const url = ` http://127.0.0.1:3000/winners/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    throw(error);
  }
}