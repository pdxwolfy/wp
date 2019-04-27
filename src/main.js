const map = require('lodash/map');

function square(number) {
    return number * number;
}

console.log(map([1, 2, 3, 4, 5, 6], square));
