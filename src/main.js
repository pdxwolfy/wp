import { map } from 'lodash';
import template from './numberlist.hbs';

let numbers = map([1,2,3,4,5,6], (number) => number * number);
console.log(template({numbers}));
