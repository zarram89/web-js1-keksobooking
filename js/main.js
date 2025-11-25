import { disablePage, initSlider } from './form.js';
import { initMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { showAlert } from './message.js';

disablePage();
initSlider();

initMap(() => {
  getData((ads) => {
    renderMarkers(ads);
  }, showAlert);
});
