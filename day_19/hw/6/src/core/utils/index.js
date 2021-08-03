import moment from 'moment';

export const calculateSumOfNumbers = numbers => numbers.reduce((t,a) => t+a, 0);
export const getFormattedTime = date => moment(date).format('MMMM Do YYYY, h:mm:ss a');
export const cel = el => document.createElement(el);
export const qel = selector => document.querySelector(selector);