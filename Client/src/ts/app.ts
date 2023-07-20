import '../scss/style.scss';
import * as myFunctions from './files/functions';
import { getPages } from './functions/generation/generate-garage';
import { getCars } from './functions/get/get-cars';
import { chooseCar } from './functions/update/choose-car';

// Проверка поддержки webp, добавление класса webp или no-webp для HTML
myFunctions.isWebp();

// Генерация гаража
getPages();
getCars();