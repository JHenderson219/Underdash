let _ = () => {

};
/**
 * Converts a list (object, array, or array-like) into a 1d or 2d array
 * @param {Object|Array} list 
 * @return {Array} 1d array of values, or 2d array of keys and values
 */
const listToMap = (list) => {
  let map;
  if (!list.length || list.length <= 0) {
    // If list is an object
    list = Object.entries(list);
    map = new Map(list);
  } else {
    // If list is an array-like, convert into a full array
    list = Array.from(list);
    map = new Map();
    list.forEach((element, index) => {
      map.set(element, index);
    });
  }
  return map;
}
/**
 * Binds a given function to a given context, returning the bound function
 * @param {Function} func a function to be bound to a given context
 * @param {*} context context to bind this function to
 */
const bindContext = (func, context) => {
  if (context) {
    func = func.bind(context);
  }
  return func;
}
// Collection methods
/**
 * Iterates over plain object or array-like object list, calling a callback 'iteratee' once for each element/index in the array
 * 
 * @param {Object|Array} list 
 * @param {Function} iteratee callback function to be called for every entry in the list
 * @param {*} context context to act as the 'this' value from inside of iteratee
 */
_.each = (list, iteratee, context) => {
  let newList = listToMap(list);
  iteratee = bindContext(iteratee, context);

  newList.forEach((value, key) => {
    // iterate over each element, calling iteratee once for each
    iteratee(value, key, newList);
  });
  return list;
}

_.map = (list, iteratee, context) => {
  let newList = listToMap(list);
  iteratee = bindContext(iteratee, context);
  let out = [];
  newList.forEach((element, index) => {
    let result = iteratee(element, index, newList);
    out.push(result);
  });
  return out;
}



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
module.exports = _;