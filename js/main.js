const AD_COUNT = 10;

const TITLES = [
  'Уютная квартирка в центре',
  'Просторная студия',
  'Светлая комната',
  'Роскошный дворец',
  'Небольшой домик',
  'Квартира с видом на парк',
  'Комната в общежитии',
  'Дом с бассейном',
  'Бунгало на пляже',
  'Лофт в стиле индастриал'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const DESCRIPTIONS = [
  'Отличное место для отдыха',
  'Удобное расположение и развитая инфраструктура',
  'Тихий район, идеально для семей с детьми',
  'В шаговой доступности от метро',
  'Свежий ремонт и новая мебель',
  'Живописный вид из окна',
  'Есть все необходимое для комфортного проживания',
  'Подходит для проведения вечеринок',
  'Можно с домашними животными',
  'Идеально для командировок'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.70000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

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

/**
 * Создает объект объявления.
 * @param {number} index - Индекс объявления (для аватара).
 * @returns {Object} Объект объявления.
 */
const createAd = (index) => {
  const lat = getRandomFloat(LAT_MIN, LAT_MAX, 5);
  const lng = getRandomFloat(LNG_MIN, LNG_MAX, 5);

  const avatarIndex = index + 1;
  const avatarUrl = `img/avatars/user${avatarIndex < 10 ? '0' + avatarIndex : avatarIndex}.png`;

  return {
    author: {
      avatar: avatarUrl
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${lat}, ${lng}`,
      price: getRandomInteger(1000, 100000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInteger(1, 5),
      guests: getRandomInteger(1, 10),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS)
    },
    location: {
      lat: lat,
      lng: lng
    }
  };
};

const ads = Array.from({ length: AD_COUNT }, (_, i) => createAd(i));

// eslint-disable-next-line no-console
console.log(ads);
