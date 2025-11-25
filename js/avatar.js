const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const fileChooserAvatar = document.querySelector('.ad-form-header__input');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserPhoto = document.querySelector('.ad-form__input');
const previewPhotoContainer = document.querySelector('.ad-form__photo');

const onAvatarChange = () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
};

const onPhotoChange = () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewPhotoContainer.innerHTML = '';
    const photo = document.createElement('img');
    photo.src = URL.createObjectURL(file);
    photo.style.width = '100%';
    photo.style.height = '100%';
    photo.style.objectFit = 'cover';
    previewPhotoContainer.appendChild(photo);
  }
};

const resetAvatar = () => {
  previewAvatar.src = 'img/muffin-grey.svg';
  previewPhotoContainer.innerHTML = '';
};

fileChooserAvatar.addEventListener('change', onAvatarChange);
fileChooserPhoto.addEventListener('change', onPhotoChange);

export { resetAvatar };
