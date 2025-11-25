const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

const roomNumberField = adForm.querySelector('#room_number');
const capacityField = adForm.querySelector('#capacity');
const typeField = adForm.querySelector('#type');
const priceField = adForm.querySelector('#price');
const timeInField = adForm.querySelector('#timein');
const timeOutField = adForm.querySelector('#timeout');

const roomsToGuests = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0']
};

const guestsToRooms = {
  0: ['100'],
  1: ['1', '2', '3'],
  2: ['2', '3'],
  3: ['3']
};

const minPrices = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

const validateCapacity = () => roomsToGuests[roomNumberField.value].includes(capacityField.value);

const getCapacityErrorMessage = () => {
  const rooms = roomNumberField.value;
  if (rooms === '100') {
    return 'Не для гостей';
  }
  return `Для ${rooms} комнат(ы) можно выбрать не более ${rooms} гостей`;
};

const validatePrice = (value) => value >= minPrices[typeField.value];

const getPriceErrorMessage = () => `Минимальная цена за ночь ${minPrices[typeField.value]}`;

pristine.addValidator(capacityField, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(roomNumberField, validateCapacity, getCapacityErrorMessage);
pristine.addValidator(priceField, validatePrice, getPriceErrorMessage);

const onRoomNumberChange = () => {
  pristine.validate(capacityField);
};

const onCapacityChange = () => {
  pristine.validate(roomNumberField);
};

const onTypeChange = () => {
  const minPrice = minPrices[typeField.value];
  priceField.placeholder = minPrice;
  priceField.min = minPrice;
  pristine.validate(priceField);
};

const onTimeInChange = () => {
  timeOutField.value = timeInField.value;
};

const onTimeOutChange = () => {
  timeInField.value = timeOutField.value;
};

roomNumberField.addEventListener('change', onRoomNumberChange);
capacityField.addEventListener('change', onCapacityChange);
typeField.addEventListener('change', onTypeChange);
timeInField.addEventListener('change', onTimeInChange);
timeOutField.addEventListener('change', onTimeOutChange);

adForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

/**
 * Переводит страницу в неактивное состояние.
 */
const disablePage = () => {
  adForm.classList.add('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilters.classList.add('map__filters--disabled');
  mapFiltersSelects.forEach((select) => {
    select.disabled = true;
  });
  mapFiltersFieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

/**
 * Переводит страницу в активное состояние.
 */
const enablePage = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilters.classList.remove('map__filters--disabled');
  mapFiltersSelects.forEach((select) => {
    select.disabled = false;
  });
  mapFiltersFieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

export { disablePage, enablePage };
