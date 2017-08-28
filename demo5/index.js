import smallIcon from './image/small.png';
import bigIcon from './image/big.png';
import imgA from './image/imgA.jpg';
import imgB from './image/imgB.png';


const img1 = document.createElement("img");
img1.src = smallIcon;
document.body.appendChild(img1);

const img2 = document.createElement("img");
img2.src = bigIcon;
document.body.appendChild(img2);

const img3 = document.createElement("img");
img3.src = imgA;
document.body.appendChild(img3);

const img4 = document.createElement("img");
img4.src = imgB;
document.body.appendChild(img4);