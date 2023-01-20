const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternatives = ['human eye', 'coral', 'flower', 'painting', 'butterfly'];

/* Looping through images */
for(let i =0; i< images.length; i++) {
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', `images/${images[i]}`);
    imgElement.setAttribute('alt', alternatives[i]);
    thumbBar.appendChild(imgElement);
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (event) => {
    if(event.target.textContent === 'Darken'){
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent = 'Lighten';
    }
    else{
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        btn.textContent= 'Darken';
    }
});

thumbBar.addEventListener('click', (event) =>{
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    
} );
