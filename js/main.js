import { createAds } from './data.js';
import { renderCard } from './card.js';

const mapCanvas = document.querySelector('#map-canvas');
const ads = createAds();

if (ads.length > 0) {
  mapCanvas.appendChild(renderCard(ads[0]));
}
