const HOUSING_TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

/**
 * Проверяет наличие данных и заполняет или скрывает элемент.
 * @param {HTMLElement} element - Элемент для заполнения.
 * @param {string|number} value - Значение данных.
 * @param {string} format - Формат вывода (опционально).
 */
const fillElement = (element, value, format = null) => {
  if (value) {
    element.textContent = format ? format.replace('{{value}}', value) : value;
  } else {
    element.remove();
  }
};

/**
 * Создает DOM-элемент карточки объявления.
 * @param {Object} ad - Объект объявления.
 * @returns {HTMLElement} DOM-элемент карточки.
 */
const renderCard = (ad) => {
  const cardElement = cardTemplate.cloneNode(true);
  const { author, offer } = ad;

  fillElement(cardElement.querySelector('.popup__title'), offer.title);
  fillElement(cardElement.querySelector('.popup__text--address'), offer.address);
  fillElement(cardElement.querySelector('.popup__text--price'), offer.price, '{{value}} ₽/ночь');
  fillElement(cardElement.querySelector('.popup__type'), HOUSING_TYPES[offer.type]);

  const capacityElement = cardElement.querySelector('.popup__text--capacity');
  if (offer.rooms && offer.guests) {
    capacityElement.textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  } else {
    capacityElement.remove();
  }

  const timeElement = cardElement.querySelector('.popup__text--time');
  if (offer.checkin && offer.checkout) {
    timeElement.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  } else {
    timeElement.remove();
  }

  fillElement(cardElement.querySelector('.popup__description'), offer.description);

  const avatarElement = cardElement.querySelector('.popup__avatar');
  if (author.avatar) {
    avatarElement.src = author.avatar;
  } else {
    avatarElement.remove();
  }

  const featuresList = cardElement.querySelector('.popup__features');
  if (offer.features && offer.features.length > 0) {
    featuresList.innerHTML = '';
    offer.features.forEach((feature) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature', `popup__feature--${feature}`);
      featuresList.appendChild(featureItem);
    });
  } else {
    featuresList.remove();
  }

  const photosList = cardElement.querySelector('.popup__photos');
  if (offer.photos && offer.photos.length > 0) {
    const photoTemplate = photosList.querySelector('.popup__photo');
    photosList.innerHTML = '';
    offer.photos.forEach((photo) => {
      const photoItem = photoTemplate.cloneNode(true);
      photoItem.src = photo;
      photosList.appendChild(photoItem);
    });
  } else {
    photosList.remove();
  }

  return cardElement;
};

export { renderCard };
