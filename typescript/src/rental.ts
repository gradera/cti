import Movie from "./movie";

class Rental {

  movie: Movie;
  daysRented: number;

  constructor(movie: Movie, daysRented: number) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  getDaysRented(): number {
    return this.daysRented;
  }

  getMovie(): Movie {
    return this.movie;
  }
}

export default Rental;