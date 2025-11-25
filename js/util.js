/**
 * Возвращает случайное целое число из переданного диапазона включительно.
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @returns {number} Случайное целое число.
 */
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

/**
 * Возвращает случайное число с плавающей точкой из переданного диапазона включительно.
 * @param {number} min - Минимальное значение.
 * @param {number} max - Максимальное значение.
 * @param {number} decimals - Количество знаков после запятой.
 * @returns {number} Случайное число с плавающей точкой.
 */
const getRandomFloat = (min, max, decimals = 1) => {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  return parseFloat((Math.random() * (upper - lower) + lower).toFixed(decimals));
};

/**
 * Возвращает случайный элемент массива.
 * @param {Array} elements - Массив элементов.
 * @returns {*} Случайный элемент массива.
 */
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

/**
 * Возвращает массив случайной длины из значений, значения не повторяются.
 * @param {Array} elements - Исходный массив значений.
 * @returns {Array} Массив случайной длины.
 */
const getRandomArray = (elements) => {
  const length = getRandomInteger(1, elements.length);
  const shuffled = elements.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, length);
};

export { getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray };
