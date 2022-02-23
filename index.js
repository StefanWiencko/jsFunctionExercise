// 1. Please write a function that shows the usage of closures

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

// 1

const validClosures = "({[]})";
const invalidClosures = "({[])})";

const validateClosures = (closures) => {
  let tracer = [];
  for (let i = 0; i < closures.length; i++) {
    if (closures[i] === "(" || closures[i] === "{" || closures[i] === "[") {
      tracer.push(closures[i]);
    } else {
      if (tracer.length === 0) return false;
      let lastValue = tracer[tracer.length - 1];
      if (
        (closures[i] === "]" && lastValue === "[") ||
        (closures[i] === "}" && lastValue === "{") ||
        (closures[i] === ")" && lastValue === "(")
      ) {
        tracer.pop();
      } else {
        break;
      }
    }
  }
  return tracer.length === 0;
};
console.log("Task 1 valid outcome :", validateClosures(validClosures));
console.log("Task 1 invalid outcome :", validateClosures(invalidClosures));

// 2
const arrayToSum = [9, 1, 22, 0, 2];
const sumItems = (array) =>
  array.reduce((previousValue, currentValue) => previousValue + currentValue);

console.log("Task 2 :", sumItems(arrayToSum));
//  3
const arrayToFlatten = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];
const flattenArray = (items) => {
  const flat = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      flat.push(...flattenArray(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
};

console.log("Task 3 :", flattenArray(arrayToFlatten));

//  4
const arrayToCompare1 = ["b", 3, 4, 76, "c"];
const arrayToCompare2 = ["a", "b", 4, 76, 21, "e"];

const compareArrays = (array1, array2) => {
  let resolut = [];
  array1.forEach((element) => {
    if (array2.includes(element)) resolut.push(element);
  });
  return resolut;
};

console.log("Task 4 :", compareArrays(arrayToCompare1, arrayToCompare2));

//  5

const anotherArrayToCompare1 = ["b", 3, 4, 76, "c"];
const anotherArrayToCompare2 = ["a", "b", 4, 76, 21, "e"];

const compareArraysAgain = (array1, array2) => {
  let resolut = [];
  array2.forEach((element) => {
    if (!array1.includes(element)) resolut.push(element);
  });
  array1.forEach((element) => {
    if (!array2.includes(element)) resolut.push(element);
  });
  return resolut;
};
console.log(
  "Task 5 :",
  compareArraysAgain(anotherArrayToCompare1, anotherArrayToCompare2)
);

// 6
const arrayToCombine1 = [1, 2, 3];
const arrayToCombine2 = [4, 5, 6, 7];

const combineArrays = (array1, array2) => {
  let biggerArray;
  let smallerArray;
  if (array1 > array2) {
    biggerArray = array1;
    smallerArray = array2;
  } else {
    biggerArray = array2;
    smallerArray = array1;
  }
  return smallerArray.map((element, index) => {
    return [element, biggerArray[index]];
  });
};
console.log("Task 6 :", combineArrays(arrayToCombine1, arrayToCombine2));

//  7
const path = ["a", "b", "c", "d"];
const nestedObject = { a: { b: { c: { d: "23" } } } };

const getValue = (path, object) => {
  let resolut = object;
  path.forEach((element) => {
    if (typeof resolut === "object") {
      resolut = resolut[element];
    } else {
      return resolut;
    }
  });

  return resolut;
};

console.log("Task 7 :", getValue(path, nestedObject));
// 8
const object1 = { a: "b", c: "d" };
const object2 = { c: "d", a: "b" };
const object3 = { a: "c", c: "a" };
const object4 = { c: "d", a: "b", q: "s" };
const compareObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  keys1.forEach((element, index) => {
    if (keys1[element] !== keys2[index]) return false;
  });
  return true;
};

console.log("Task 8 true outcome :", compareObjects(object1, object2));
console.log("Task 8 false outcome :", compareObjects(object3, object4));

//  9
const object = { color: "Blue", id: "22", size: "xl" };
const keyList = ["color", "size"];
const compareKeys = (keys, object) => {
  let resolut = {};
  const objectKeys = Object.keys(object);
  const filteredKeys = objectKeys.filter(
    (objectKey) => !keys.includes(objectKey)
  );
  filteredKeys.forEach((key) => {
    resolut[key] = object[key];
  });
  return resolut;
};
console.log("Task 9 :", compareKeys(keyList, object));

const concat = () => {
  let arr1 = anotherArrayToCompare1;

  return arr1.concat(anotherArrayToCompare2);
};

console.log("concat", concat());
