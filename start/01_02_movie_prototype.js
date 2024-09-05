// Write your code here
function Movie(title, director, genre, releaseYear, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.releaseYear = releaseYear;
  this.rating = rating;
};

Movie.prototype.getOverview = function () {
  return `${this.title}, a ${this.genre} film directed by ${this.director}
    was released in ${this.releaseYear}.
    It received a rating of ${this.rating}`
};

const titanik = new Movie("Titanik", "some famous guy", "drama", "1988", 4, 8);
console.log(titanik.getOverview());

// Class implementation

class MovieClass {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director}
    was released in ${this.releaseYear}.
    It received a rating of ${this.rating}`
  }
}

const someMovie = new MovieClass("Friends", "some famous guy", "comedy", "1990", 5.0);
console.log(someMovie.getOverview());