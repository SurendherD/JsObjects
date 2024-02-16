// Challenge 1.1:
// Step 1: Create an object for storing your profile information. The object name can be "studentProfile". below are the keys which are to be added to the object, please add your values for the same:
// studentName,
// studentAge,
// cohortName,
// location,
//hobbies.

// Step 2: Add more then one hobby in the student object.
//Hint: Use Arrays

// Your code goes here

var studentProfile = {
  studentName: 'P.surendher reddy',
  studentAge: 23,
  cohortName: 'HD1',
  location: 'Hyderabad',
  hobbies: ['Programming', 'Music'],
};

studentProfile.hobbies.push(['Cooking', 'Dance']);

// Challenge 1.2: Access the studentName value of the object "studentProfile" using dot "." notation and print the same in console.

var Name = studentProfile.studentName;
console.log(Name);

//Challenge 1.3: Access the cohortName property of the object using Bracket notation ([]).
var Cohort = studentProfile['cohortName'];

//Challenge 2.1:Create an object using the constructor function for storing the book information. The object name can be "Book". Include the following values .
//title
//author

//Challenge 2.2: Access the title property of the object "Book" and print the same in console.

function Book(title, author) {
  this.title = title;
  this.author = author;
}

let book1 = new Book('Karma Yoga', 'swami Vivekananda');
let book2 = new Book('Ramayanam', 'Valmiki');

console.log(book1.title);
//console.log(book1.author);

console.log(book2.title);
//console.log(book2.author);
