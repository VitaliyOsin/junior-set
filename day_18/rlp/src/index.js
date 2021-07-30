import './style.css';
import JS_IMAGE from '../src/assets/js-image.png';

console.log('Rollup')

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'ja-image';
jsImageHTML.src = JS_IMAGE;

document.body.append(jsImageHTML);