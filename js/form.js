const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldsets = mapFilters.querySelectorAll('fieldset');

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
