const images = ["1.jpg", "2.jpg", "3.jpg"];
const randomImages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${randomImages}`;
bgImage.style.background = "no-repeat center center/cover";
bgImage.style.width = "970px";
bgImage.style.height = "800px";
bgImage.style.top="100px";
bgImage.style.left="280px";
bgImage.style.margin="27px";

document.body.appendChild(bgImage);

const bgImage2 = document.createElement("img");
bgImage2.src = `img/${randomImages}`;
bgImage2.style.background = "cover";
bgImage2.style.width="100%";
bgImage2.style.height="150%";
bgImage2.style.opacity = "0.5";
bgImage2.style.position = "absolute";


document.body.appendChild(bgImage2);











