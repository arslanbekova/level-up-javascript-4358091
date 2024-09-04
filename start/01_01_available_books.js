// Write your code here
class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  getAvailability() {
    switch(true) {
      case this.numCopies === 0:
        return "out of stock";
      case this.numCopies < 10:
        return "low stock";
      default:
        return "in stock";
    }
  }

  sell(numSold = 1) {
    this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    this.numCopies += numCopies;
  }
}
