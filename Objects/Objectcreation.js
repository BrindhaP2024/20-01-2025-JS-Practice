// creation k-v pairs..
obj1 = {
    name: 'Farina fasal',
    role: 'Software developer',
    id: 23420,
    id1: 3343
}
// using constructor
let emp = new Object();
emp.id = 2020;
emp.name = "Elvin";


console.log(obj1.role);
console.log(delete obj1['id1']);

console.log(obj1.id1);
// using create()

const personCreation = {
    greet: function () {
        console.log("Hello!");
    }
};
const newPerson = Object.create(personCreation);
newPerson.greet();

// nested object creation 
const person = {
    name: "nandha",
    address: {
        street: "123 Street",
        city: "chennai",
        postalCode: "10001"
    }
};

console.log(person.address.city);

// functions in objects

const personfun = {
    firstName: "Saran",
    lastName: "Prasanth",

    fullName: function () { //method usage here 
        return this.firstName + " " + this.lastName;
    }
};

console.log(personfun.fullName());


// Object destructuring 

const { firstName, lastName } = personfun;
console.log(firstName);
console.log(lastName);  // 30

// rename destructuring process here 

const { firstName: fName, lastName: lName } = personfun;

console.log(fName);
console.log(lName);

// objects methods and constructor

console.log(Object.keys(personfun));
console.log(Object.values(personfun));

console.log(Object.entries(person));

// freeze()
const Sample = { name: "Brindha" };
Object.freeze(Sample);
Sample.age = 23; // It is not working as the object is frozen...
Sample.name = "Jack"
console.log(Sample);
// seal()
const sampledata = { name: "Nivin" };
Object.seal(sampledata);
sampledata.name = 'Jack';
console.log(sampledata)

// assign()
// Object.assign(target, source);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
console.log(returnedTarget);

// Key value pairs results fromentries() method
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(fruits)
