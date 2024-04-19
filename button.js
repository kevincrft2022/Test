const button = document.querySelector('button');
const image = document.querySelector('.image');

button.addEventListener('click', () => {
  const imageUrl = button.getAttribute('data-image');
  image.src = imageUrl;
});
