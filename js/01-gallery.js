import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

function makeGalleryItem({ preview, original, description }) {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image"
        src="${preview}" 
        data-source="${original}"  
        alt="${description}"
        width="340">
    </a>
  </div>
  `;
}

function onImgClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="1280" alt="${e.target.alt}">`
  );
  instance.show();

  function onEscKey(e) {
    if (e.key === 'Escape') {
      instance.close(instance);
    }
  }

  window.addEventListener('keydown', onEscKey);
}

const makeGalleryList = galleryItems.map(makeGalleryItem).join('');

refs.gallery.insertAdjacentHTML('afterbegin', makeGalleryList);

refs.gallery.addEventListener('click', onImgClick);
