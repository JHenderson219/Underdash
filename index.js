let _ = () => {
  // refactor as class with static methods?
};

// Helper methods
_.checkInputType = (input, type) => {
  if (!input || !type) {
    return;
  }
  if (!(input instanceof type)) {
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
  return arr.slice(0, n - 1);
}

_.last = (arr, n = 1) => {
  _.checkInputType(arr, Array);
  return _.valueFromArray(arr.slice(arr.length - n, arr.length));
}

_.rest = (arr, n = 1) => {
  _.checkInputType(arr, Array);
  return arr.slice(n, arr.length);
}

// _.flatten = (arr, shallow) => {
//     _.checkInputType(arr, Array);
//     // flatten nested array
//     // if shallow, only flatten one level
//     if (shallow) {

//     }
//     console.log('input arr', arr);

//     let output = arr.map((element) => {
//         if (Array.isArray(element)){
//             console.log('element is array');
//             console.log('arr', arr, 'element', element);
//         }
//         console.log('returning', element);
//         return element;
//     });
//     console.log('output', output);
//     return output;
// }

_.without = (arr, ...values) => {
 let output = arr.filter((element) => {
   if (values.indexOf(element) < 0) {
    return true;
   }
 });
  return output;
}

module.exports = _;