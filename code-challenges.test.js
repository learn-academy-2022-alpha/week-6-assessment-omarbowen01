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
// make a function called mappedArr that takes in an array as a parameter
// make a variable called mappedArr
// make a variable called splitname containing an object of name.split
//use .map to iterate over arrays
// use string, toUpperCase and slice method to capitalize first letter of name
// use join to turn string to array and obj.occupation for string interpolation
// return mappedArr.

const arrayCap = (arr) => {

  let mappedArr = arr.map(obj)=>

  let splitName = obj.name.split(" ")
  let mappedCapitalizedName = splitName.map(string=> string[0].toUpperCase() + string.slice(1))
    return `${mappedCapitalizedName.join(" ")} is ${obj.occupation}.`
})
    return mappedArr
}

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
// create a function called remainders that returns an array of only the remainders divided by 3
// create variable called filtered
// filter array
// return typeof v === "number"
// return filtered.map with value and v modulo 3

const remainders = (arr) =>
{
  let filtered = arr.filter(v) => {
      return typeof v === "number"
})
      return filtered.map((v) => v % 3)
}

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

//create a function named numbersCubed that returns an array of only the remainders of numbers when divided by 3
// use arr as a parameter
// create variable of sum eqaul to zero
// use .filter to iterate through array to return the sum of the reminders divided by three
// return new sum

const numbersCubed = (arr) => {
  let sum =0
  arr.filter(v=> sum += v ** 3)
)
return sum
}
