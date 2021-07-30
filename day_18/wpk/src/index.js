import Post from '@modules/Post.js';
import './styles/style.css';
import WebpackLogo from './assets/webpack-logo.png';
import json from './assets/json.json';
import xml from './assets/data.xml';
import csv from './assets/data.csv';

const n = WebpackLogo.split('/').length - 1;
const imgName = WebpackLogo.split('/')[n];
const post = new Post('Webpack Post Title', imgName);
console.log(post.toString());

console.log('JSON: ',json);
console.log('XML: ',xml);
console.log('CSV: ',csv);

console.log(WebpackLogo.split('/')[10])