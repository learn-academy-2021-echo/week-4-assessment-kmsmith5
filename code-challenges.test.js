// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

//read the hint link and found the test case that should work to properly test this function

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffle', () => {
  it('takes in an array, removes the first item from the array and shuffles the remaining content.', () => {
    var colors1 = ["purple", "blue", "green", "yellow", "pink"]
    var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    expect(shuffle(colors1)).not.toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    expect(shuffle(colors2)).not.toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
    //above line SHOULD check if remaining values are the same regardless of order
  });
});

// b) Create the function that makes the test pass.

//.pop the first value
// iterate through remaining values of the array
//reassign current valiue to a random index using math.ramdom
//return the shufled array

const shuffle = (array) => {
  array.pop()
  for (var i = 0; i < array.length; i++) {
    array[i] = array[Math.floor(Math.random() * (array.length))]
  }
  return array
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    var nums1 = [3, 56, 90, -8, 0, 23, 6]
    var nums2 = [109, 5, 9, 67, 8, 24]
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

// b) Create the function that makes the test pass.
//create a result array, empty array
//sort the input array from least to greatest
//push the value at first index into result array
//push the value at the last index into result array
//refactored to simply assign the values of result array instead of two pushes
//return result array
const minMax = (array) => {
  let result = [];
  let sorted = array.sort((a, b) => a - b)
  result = [sorted[0], sorted[sorted.length - 1]]
  return result;
}
// test passed


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDups", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    var testArray1 = [3, 7, 10, 5, 4, 3, 3]
    var testArray2 = [7, 8, 2, 3, 1, 5, 4]
    expect(noDups(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]



// b) Create the function that makes the test pass.
//create a set using concatted array.
//return the set as an array
const noDups = (arr1, arr2) => {
     return [...new Set(arr1.concat(arr2))];
}
//getting failed, receiving an empty object
//after research from MDN, I realized I need to use the spread operator to transform the set into an array
//refactored to directly return without an additional variable
//additional refactor to make it one line



//could also iterate and check if index of current value in first array = -1 in second array.
//if index = -1, meaning it doesn't appear in second array, push current vaalue to second array
//return second array
