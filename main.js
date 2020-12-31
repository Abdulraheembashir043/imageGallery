const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelectorAll('.thumb-bar img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */
thumbBar.forEach(image => {
  image.addEventListener('click', () => {
    let pass = image.getAttribute('src');
    displayedImage.setAttribute('src', pass);
  })
})


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if(btn.textContent === 'Darken') {
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
})

