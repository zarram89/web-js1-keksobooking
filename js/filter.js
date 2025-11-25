const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelectorAll('.map__checkbox');

const ADS_COUNT = 10;

const Price = {
  MIDDLE: 10000,
  HIGH: 50000,
};

const filterByType = (ad) => housingType.value === 'any' || ad.offer.type === housingType.value;

const filterByPrice = (ad) => {
  switch (housingPrice.value) {
    case 'any':
      return true;
    case 'low':
      return ad.offer.price < Price.MIDDLE;
    case 'middle':
      return ad.offer.price >= Price.MIDDLE && ad.offer.price < Price.HIGH;
    case 'high':
      return ad.offer.price >= Price.HIGH;
  }
};

const filterByRooms = (ad) => housingRooms.value === 'any' || ad.offer.rooms === Number(housingRooms.value);

const filterByGuests = (ad) => housingGuests.value === 'any' || ad.offer.guests === Number(housingGuests.value);

const filterByFeatures = (ad) => {
  const features = ad.offer.features || [];
  const selectedFeatures = Array.from(housingFeatures)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);

  return selectedFeatures.every((feature) => features.includes(feature));
};

const filterAds = (ads) => {
  const filteredAds = [];

  for (const ad of ads) {
    if (filteredAds.length >= ADS_COUNT) {
      break;
    }

    if (
      filterByType(ad) &&
      filterByPrice(ad) &&
      filterByRooms(ad) &&
      filterByGuests(ad) &&
      filterByFeatures(ad)
    ) {
      filteredAds.push(ad);
    }
  }

  return filteredAds;
};

const setFilterListener = (cb) => {
  mapFilters.addEventListener('change', () => {
    cb();
  });
};

export { filterAds, setFilterListener };
