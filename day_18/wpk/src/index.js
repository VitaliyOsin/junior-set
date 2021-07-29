import Post from './Post.js';
import './styles/style.css';
import WebpackLogo from './assets/webpack-logo.png';
import json from './assets/json.json';

const n = WebpackLogo.split('/').length - 1;
const imgName = WebpackLogo.split('/')[n];
const post = new Post('Webpack Post Title', imgName);
console.log(post.toString());

console.log(json);

console.log(WebpackLogo.split('/')[10])