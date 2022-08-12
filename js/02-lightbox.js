import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

function makeGalleryItem({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"
        src="${preview}" 
        alt="${description}"
        width="340">
    </a>
  `;
}

const makeGalleryList = galleryItems.map(makeGalleryItem).join('');

refs.gallery.insertAdjacentHTML('afterbegin', makeGalleryList);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});
