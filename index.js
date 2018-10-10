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
  let valSet = new Set(values);
  let output = arr.filter((element) => {
    // "When in doubt, hash it out"
    // value => new Set
    // if set.has(element)
    if (!valSet.has(element)) {
      return true;
    }
  });
  return output;
}

// Collection methods -- do these next
/**
 * Iterates over plain object or array-like object list, calling a callback 'iteratee' once for each element/index in the array
 * 
 * @param {Object|Array} list 
 * @param {Function} iteratee 
 * @param {*} context
 */
_.each = (list, iteratee, context) => {
  // for each element in list
  let newList;
  if (list instanceof Object) {
    newList = Object.entries(list);
    console.log('an object ->',list);
  }
  if (newList.length === 0) {
    newList = list
  }
  if (context) {
    iteratee = iteratee.bind(context)
  }
  newList.forEach((element, index) => {
    if (element instanceof Array) {
      element = element[1];
      index = element[0];
    }
    let result = iteratee(element, index, list);
    console.log(result);
  });
  return list;
}

_.map = (list, iteratee, context) => {

}

module.exports = _;