let _ = () => {

};
_.checkInputType = (input, type) => {
    if (!input || !type) {
        return;
    }
    if (!(input instanceof type)){
        throw 'Invalid input!';
    }
}
// Array methods
_.first = (arr, n = 1) => {
    _.checkInputType(arr, Array);
    let out = arr.slice(0, n);
    return out.length === 1 ? out[0] : out;
}

_.initial = (arr, n = arr.length) => {
    _.checkInputType(arr, Array);
    return arr.slice(0, n-1);
}

_.last = () => {}

module.exports = _;