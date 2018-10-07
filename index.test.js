const _ = require('./index');
const arr = [1,2,3,4,5];
const count = 3;
const overCount = 7;
const emptyArr = [];
const object = {};
const number = 2
const string = 'TestString';

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
    expect(_.first(arr)).toBe(1);
    expect(_.first(arr, count)).toEqual([1,2,3]);
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
    expect(_.initial(arr)).toEqual([1,2,3,4]);
    expect(_.initial(arr, count)).toEqual([1,2])
});