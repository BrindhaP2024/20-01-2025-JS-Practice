// set(key, value) – Adds a key-value pair to the Map.
// get(key) – Retrieves the value for a specific key.
// has(key) – Returns true if the Map contains the key.
// delete(key) – Removes the key-value pair.
// clear() – Clears all the key-value pairs.
// size – Returns the number of key-value pairs.
// forEach() – Iterates over each key-value pair in the Map.

const map = new Map();

// Setting key-value pairs
map.set('name', 'Alexander');
map.set(1, 'Number One');
map.set(true, 'Boolean Key');

console.log(map.get('name'));
console.log(map.get(1));
console.log(map.get(true));

// Checking if a key exists
console.log(map.has('name'));
console.log(map.has('age'));

// Deleting a key-value pair
map.delete(1);
console.log(map.has(1));

// Iterating through Map
map.set('age', 30);
map.set('city', 'New York');

// Using forEach
map.forEach((value, key) => {
    console.log(key, ':', value);
});
