var redux = require('redux');

console.log('Starting redux example');

// pure function
function add(a, b) {
    return a + b;
}

var a = 3;
function add(b) {
    return a + b;
}

var result;
function add() {
    result = a + b;
    return result;
}

function add(a, b) {
    return a + b + new Date().getSeconds();
}
/*
function changeProp(obj) {
    return {
        ...obj,
        name: 'Raul'
    }
    // obj.name = 'Raul';
    // return obj:
}

var res = changeProp({
    name: 'Hector',
    age: 25
});
console.log(res)
*/

function changeProp(obj) {
    return {
        ...obj,
        name: 'Raul'
    }
    // obj.name = 'Raul';
    // return obj:
}

var startingValue = {
    name: 'Hector',
    age: 25
};

var res = changeProp(startingValue);
console.log(startingValue);
console.log(res);
