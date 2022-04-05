const images = ["1.jpg", "2.PNG", "3.PNG"];

const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImages}`;

document.body.appendChild(bgImage);
