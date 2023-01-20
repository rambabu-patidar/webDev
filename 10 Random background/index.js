const  button = document.querySelector('button');

function random(number) {
    return Math.floor( Math.random() * (255 + 1));
}


button.onclick = () => {
    const background = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

    document.body.style.backgroundColor = background;
    button.style.backgroundColor = background;
}
