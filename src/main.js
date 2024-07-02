import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImages } from './js/pixabay-api.js';
import renderGallery from './js/render-functions.js';

const refs = {
  form: document.querySelector('#form-request'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.btn-load-more'),
};

let searchQuery = '';
let page = 1;
let totalImages = 0;
let loadedImages = 0;

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  refs.loader.classList.remove('hidden');
  refs.loadMoreBtn.classList.add('hidden');
  refs.gallery.innerHTML = '';

  searchQuery = e.target.query.value.trim();

  if (!searchQuery) {
    refs.loader.classList.add('hidden');
    iziToast.warning({
      title: 'Attention!',
      message: 'Search field must be filled',
      messageSize: '16',
      position: 'topRight',
      close: false,
      displayMode: 1,
    });
    return;
  }

    page = 1;
    loadedImages = 0;
  try {
      const data = await getImages(searchQuery, page);
      totalImages = data.totalHits;
      

    if (!data.totalHits) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
      renderGallery(data, refs.gallery);
      loadedImages += data.hits.length;
      if (loadedImages < totalImages) {
          refs.loadMoreBtn.classList.remove('hidden');
      }
  } catch (error) {
    iziToast.error({
      title: 'Error!',
      message: error.message,
      messageSize: '16',
      position: 'topRight',
      close: false,
      displayMode: 1,
    });
  } finally {
    refs.loader.classList.add('hidden');
  }

  e.target.reset();
});

refs.loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  refs.loader.classList.remove('hidden');
  try {
    const data = await getImages(searchQuery, page);
    renderGallery(data, refs.gallery);
    loadedImages += data.hits.length;

    if (loadedImages >= totalImages) {
      refs.loadMoreBtn.classList.add('hidden');
      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
        messageSize: '16',
        position: 'topRight',
        close: false,
        displayMode: 1,
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error!',
      message: error.message,
      messageSize: '16',
      position: 'topRight',
      close: false,
      displayMode: 1,
    });
  } finally {
    refs.loader.classList.add('hidden');
  }

  const { height: cardHeight } = refs.gallery.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
});




