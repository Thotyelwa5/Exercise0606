//Build 5 person objects using constructors
function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  
  let person1 = new Person("Aphelele", "Joyi", 25);
  let person2 = new Person("Kamva", "Skalana", 30);
  let person3 = new Person("Thotyelwa", "Mpongwana", 42);
  let person4 = new Person("Siyamanga", "Zweni", 37);
  let person5 = new Person("Thabang", "Kganana", 50);

//add each object to the people array
//   let people = []; 
// people.push(person1);
// people.push(person2);
// people.push(person3);
// people.push(person4);
// people.push(person5);

// console.log(people);
  
  //add array to local storage
  let people = [person1, person2, person3, person4, person5];
let peopleString = JSON.stringify(people);
localStorage.setItem('people', peopleString);
console.log('Array stored in local storage.');

  