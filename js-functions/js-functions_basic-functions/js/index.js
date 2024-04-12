console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
let titleOfBook = "The Lord of the Javascript";
let authorOfBook = "Mario";
let rating = 4.6;
let numberSales = 220;

/*console.log("Title:", titleOfBook);
console.log("Author:", authorOfBook);
console.log("Rating:", rating);
console.log("Sales:", numberSales);*/

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log("Title:", titleOfBook);
console.log("Author:", authorOfBook);
console.log("Rating:", rating);
console.log("Sales:", numberSales);
// --^-- write your code here --^--*/

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData(rating, numberSales) {
  console.log("Title:", titleOfBook);
  console.log("Author:", authorOfBook);
  console.log("Rating:", rating);
  console.log("Sales:", numberSales);
}
logBookData(4.8, 310);
logBookData(4.6, 350);
logBookData(4.8, 410);
// --^-- write your code here --^--
