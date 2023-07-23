import { Drive } from "../../types/types";

// Режим поездки
export async function driveMode(id: number): Promise<Drive> {
  const url = `http://127.0.0.1:3000/engine?id=${id}&status=drive`;
  const response = await fetch(url, {
    method: 'PATCH',
  });
  const data = await response.json();
  return data;
}