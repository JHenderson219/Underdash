let _ = () => {

};
// Helper methods
_.checkInputType = (input, type) => {
    if (!input || !type) {
        return;
    }
    if (!(input instanceof type)){
        throw 'Invalid input!';
    }
}
_.valueFromArray = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    return arr;
}

// Array methods
_.first = (arr, n = 1) => {
    _.checkInputType(arr, Array); 
    return _.valueFromArray(arr.slice(0, n));
}

_.initial = (arr, n = arr.length) => {
    _.checkInputType(arr, Array);
    return arr.slice(0, n-1);
}

_.last = (arr, n = 1) => {
    _.checkInputType(arr, Array);
    return _.valueFromArray(arr.slice(arr.length-n, arr.length));
}

_.rest = (arr, n = 1) => {
    _.checkInputType(arr, Array);
    return arr.slice(n, arr.length);
}

module.exports = _;