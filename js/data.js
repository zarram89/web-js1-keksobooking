import { getRandomInteger, getRandomFloat, getRandomArrayElement, getRandomArray } from './util.js';

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

const createAds = () => Array.from({ length: AD_COUNT }, (_, i) => createAd(i));

export { createAds };
