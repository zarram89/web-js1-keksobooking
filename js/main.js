import { createAds } from './data.js';
import { disablePage, initSlider } from './form.js';
import { initMap } from './map.js';

const ads = createAds();

disablePage();
initSlider();
initMap(ads);
