import { disablePage, initSlider } from './form.js';
import { initMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { showAlert } from './message.js';
import { filterAds, setFilterListener } from './filter.js';
import { debounce } from './util.js';
import './avatar.js';

disablePage();
initSlider();

initMap(() => {
  getData((ads) => {
    renderMarkers(filterAds(ads));
    setFilterListener(debounce(() => renderMarkers(filterAds(ads))));
  }, showAlert);
});
