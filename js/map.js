import { enablePage } from './form.js';
import { renderCard } from './card.js';
import { setAddress } from './form.js';

const map = L.map('map-canvas');
const markerGroup = L.layerGroup().addTo(map);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.6917,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const { lat, lng } = evt.target.getLatLng();
  setAddress(lat, lng);
});

const icon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const createMarker = (ad) => {
  const { lat, lng } = ad.location;
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(renderCard(ad));
};

const initMap = (onLoad) => {
  map.on('load', () => {
    enablePage();
    onLoad();
  })
    .setView({
      lat: 35.6895,
      lng: 139.6917,
    }, 10);

  // Set initial address
  setAddress(35.6895, 139.6917);
};

const renderMarkers = (ads) => {
  markerGroup.clearLayers();
  ads.forEach((ad) => {
    createMarker(ad);
  });
};

const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.6917,
  });
  map.setView({
    lat: 35.6895,
    lng: 139.6917,
  }, 10);
  map.closePopup();
  setAddress(35.6895, 139.6917);
};

export { initMap, renderMarkers, resetMap };
