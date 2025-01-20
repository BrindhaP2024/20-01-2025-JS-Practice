const uniqueNumbers = new Set();

uniqueNumbers.add(1);
uniqueNumbers.add(2);
uniqueNumbers.add(3);
uniqueNumbers.add(4);
uniqueNumbers.add(5);
uniqueNumbers.add(2);
uniqueNumbers.add(3);

console.log(`Set Size: ${uniqueNumbers.size}`);

console.log(uniqueNumbers.has(3));
console.log(uniqueNumbers.has(6));

uniqueNumbers.delete(4);
console.log(`Set after deleting 4:`, uniqueNumbers);

uniqueNumbers.clear();
console.log(`Set after clearing:`, uniqueNumbers);

uniqueNumbers.add(10);
uniqueNumbers.add(20);

uniqueNumbers.forEach(value => {
console.log(value);
});
