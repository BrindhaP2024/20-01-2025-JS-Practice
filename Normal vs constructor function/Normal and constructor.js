function add(a, b) {
    return a + b;
}

console.log(add(2, 3));

class IndianBook {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const wingsOfFire = new IndianBook("Wings of Fire", "Dr. A.P.J. Abdul Kalam");
const bhagavadGita = new IndianBook("Bhagavad Gita", "Lord Krishna");

console.log(`"${wingsOfFire.title}" is a book written by ${wingsOfFire.author}.`);
console.log(`"${bhagavadGita.title}" is a book written by ${bhagavadGita.author}.`);
