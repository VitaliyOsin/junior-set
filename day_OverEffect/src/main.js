import "../src/styles.css";
import {from, fromEvent} from 'rxjs';
import { map, every, filter} from 'rxjs/operators';
import Cube from './cube';
import { cubes } from './arr';
import Pop from './pop';

const btn = document.getElementById('btn');
const cubesDiv = document.querySelector('.cubes');
const pop = new Pop();

const cubesIn = new Cube(cubes, document.querySelector('.cubes'));
cubesIn.render();

const strean2$ = fromEvent(btn, 'click')
    .pipe(
        map(v => v.target.innerText)
    )
    .subscribe(v => {
        console.log(v)
    })

const stream4$ = fromEvent(cubesDiv, 'mouseover');  
const stream5$ = fromEvent(cubesDiv, 'mouseout');  
stream4$
    .pipe(
        map(v => v.target),
        filter(v => v.className === 'cubes-sub')
    )
    .subscribe(v => {
        pop.show(v);
    });

stream5$
    .pipe(
        map(v => v.target),
        filter(v => v.className === 'cubes-sub')
    )
    .subscribe(v => {
        pop.hide(v);
    });    

from([45,4,8,9,7,8,12,26,6])
    .pipe(
        every(v => v > 0)
    )
    .subscribe(v =>{
        console.log(v);
    })

