// function createCounter() {
//     let count = 0;
//     return {
//         increment: function() {
//         count++;
//         console.log(count);
//         },
//         getCount: function() {
//         return count;
//         }
//     };
// }
// const counter = createCounter();
// counter.increment(); 
// counter.increment(); 
// console.log(counter.getCount()); 

// using #
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    setName(name) {
        this.#name = name;
    }

    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            throw new Error("Age must be a positive number");
        }
    }
}

const person = new Person("Brindha", 23);
console.log(person.getName()); 
console.log(person.getAge()); 
person.setName("Jane Doe");
person.setAge(25);
console.log(person.getName());
console.log(person.getAge());

// using getters and setters
class Employee {
    constructor(name, rating) {
        this._name = name;
        this._rating = rating;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get rating() {
        return this._rating;
    }

    set rating(newRating) {
        if (newRating > 0) {
            this._rating = newRating;
        } else {
            throw new Error("Rating must be a positive number");
        }
    }
}

const emp = new Employee("Naren", 9);
console.log(emp.name);
console.log(emp.rating); 
emp.name = "Pooja";
emp.rating = 10;
console.log(emp.name); 
console.log(emp.rating); 

