const images = ["img1.webp", "img2.webp", "img3.webp"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);