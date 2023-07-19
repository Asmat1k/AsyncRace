import { Cars } from "../../types/types";
 
export async function getCars(): Promise<Array<Cars>> {
  try { 
    const url = 'http://127.0.0.1:3000/garage';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  catch (err) {
    throw(err);
  }
}