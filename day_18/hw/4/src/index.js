import './styles.css';
import imgRollPack from './assets/jsImg.png';

const rolImg = document.createElement('img');
rolImg.className = 'img-rollpack';
rolImg.src = imgRollPack;

const textH1 = document.createElement('h1');
textH1.className = 'text-h1';
textH1.innerText = 'Rollup / Webpack course.';

document.body.prepend(rolImg);
document.body.prepend(textH1);

console.log('Hello World!');