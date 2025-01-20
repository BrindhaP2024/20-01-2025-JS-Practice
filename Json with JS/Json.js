const person = {
    city: "New York"

};

const jsonString = JSON.stringify(person);

console.log(jsonString);
let jsondata = JSON.parse(jsonString);
console.log(jsondata);



