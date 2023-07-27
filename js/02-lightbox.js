import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryElement = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a 
  class="gallery__link" 
  href="${original}"
  >
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}" 
    />
  </a>
</li>`;
  })
  .join("");

galleryElement.innerHTML = galleryMarkup;

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionSelector: "img",
  captionPosition: "bottom",
  captionDelay: 250,
});