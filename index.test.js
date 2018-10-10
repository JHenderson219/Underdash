let _ = require('./index');
const arr = [0, 1, 2, 3, 4];
const map = new Map(arr.map(element => [element, element]));
const obj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
}
const multByTwo = (number) => { return number * 2 };
const deepArr = [0, [1], [2, [[3]]]];
const count = 3;
const overCount = 7;
const emptyArr = [];
const object = {};
const number = 2
const string = 'TestString';

test('_.each returns the expected values', () => {
  const spy = jest.spyOn(_, 'each');
  _.each(arr, multByTwo);
  _.each(obj, multByTwo);
  expect(spy).toHaveBeenCalled();
});

test('_.map returns the expected values', () => {
  expect(_.map(arr, multByTwo)).toEqual([0,2,4,6,8]);
  expect(_.map(obj, multByTwo)).toEqual([0,2,4,6,8]);
})

test('_ is a function', () => {
  expect(typeof _).toBe('function');
});
let methods = Object.getOwnPropertyNames(_).filter(prop => typeof _[prop] === 'function');

test('_.first catches non arrays', () => {
  expect(() => {
    _.first(string)
  }).toThrow();

  expect(() => {
    _.first(object)
  }).toThrow();

  expect(() => {
    _.first(number)
  }).toThrow();
})
test('_.first returns the expected values', () => {
  expect(_.first(arr)).toBe(0);
  expect(_.first(arr, count)).toEqual([0, 1, 2]);
  expect(_.first(emptyArr)).toEqual([]);
});

test('_.initial catches non arrays', () => {
  expect(() => {
    _.initial(string)
  }).toThrow();

  expect(() => {
    _.initial(object)
  }).toThrow();

  expect(() => {
    _.initial(number)
  }).toThrow();
});

test('_.initial returns expected values', () => {
  expect(_.initial(arr)).toEqual([0, 1, 2, 3]);
  expect(_.initial(arr, count)).toEqual([0, 1]);
});

test('_.last returns expected values', () => {
  expect(_.last(arr)).toEqual(4);
  expect(_.last(arr, count)).toEqual([2, 3, 4]);
});

test('_.rest returns expected values', () => {
  expect(_.rest(arr)).toEqual([1, 2, 3, 4]);
  expect(_.rest(arr, count)).toEqual([3, 4]);
});

// test('_.flatten returns expected values', () => {
//     expect(_.flatten(deepArr)).toEqual([0, 1, 2, 3]);
//     expect(_.flatten(deepArr, true)).toEqual([0, 1, 2, [[3]]]);
// });

test('_.without returns expected values', () => {
  expect(_.without(arr, 2, 3)).toEqual([0, 1, 4]);
});