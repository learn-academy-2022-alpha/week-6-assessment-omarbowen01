// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// describe("arrayCap", () => {
//   it("returns an array with a sentence about each person with their name capitalized", () => {
//     const people = [
//       { name: "ford prefect", occupation: "a hitchhiker" },
//       { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//       { name: "arthur dent", occupation: "a radio employee" }
//     expect(arrayCap(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })


// b) Create the function that makes the test pass.
// make a function called arrayCap that takes in an array as a parameter
// make a variable called newArr
// make a variable called name
//use .map to iterate over arrays
// use charAt(0), toUpperCase and substring
// set return value = name.join + 'is' + 'v.occupation'
// return new array.


//   const arrayCap = (arr) => {
//     let newArr = arr.map(v => {
//       let name = v.name.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1)
//       )
//       return v = name.join(" ") + ' is ' +  v.occupation
//     })
//     return newArr
// }




// // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//
// // a) Create a test with an expect statement using the variables provided.
//
// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// // Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// // Expected output: [ 2, 1, -1 ]
//
// describe("remainders", () => {
//   it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//     expect(remainders("hodgepodge1")).toEqual([ 2, 0, -1, 0 ])
//     expect(remainders("hodgepodge2")).toEqual([ 2, 1, -1 ])
//   })
// })


// // b) Create the function that makes the test pass.

//create a function named remainders that returns an array of only the remainders of numbers when divided by 3
// pass hodgepodge1 and hodgepodge2 as parameters
// use .filter to iterate through array to turn the remainder of numbers divided by 3
// return new array

// const remainders = (hodgepodge1, hodgepodge2) => {
//
//   let newIndex= array.filter(value => {
//
//   return value % 3 === 0
//    (stuck here)
// }
// }

//
// // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
//
// // a) Create a test with an expect statement using the variables provided.
//
// const cubeAndSum1 = [2, 3, 4]
// // Expected output: 99
// const cubeAndSum2 = [2, 3, 4]
// // Expected output: 1125
//
// describe("numbersCubed", () => {
//   it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
//     expect(numbersCubed(cubeAndSum1)).toEqual([99])
//     expect(numbersCubed(cubeAndSum2)).toEqual([1125])
//   })
// })

// b) Create the function that makes the test pass.
// create function called numbersCubed
// use reduce to return sum of all the numbersCubed
// use method to cube the sum of the numbers
// return output of sum of all numbers cubed

//
// const numbersCubed= (cubeAndSum1, cubeAndSum2) => {
//   let eachItem = array.reduce((x,y) => x + y)
//
// return array.filter(cubeAndSum1) => {
// }
// stuck here
