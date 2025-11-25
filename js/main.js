import { createAds } from './data.js';
import { renderCard } from './card.js';
import { disablePage, enablePage } from './form.js';

const mapCanvas = document.querySelector('#map-canvas');
const ads = createAds();

if (ads.length > 0) {
  mapCanvas.appendChild(renderCard(ads[0]));
}

disablePage();
enablePage();
