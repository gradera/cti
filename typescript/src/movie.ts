const childrens = 2,
  regular = 0,
  newRelease = 1;

class Movie {
  title: String;
  priceCode: number;

  constructor(title: String, priceCode: number) {
    this.title = title;
    this.priceCode = priceCode;
  }

  getPriceCode(): number {
    return this.priceCode;
  }

  setPriceCode(priceCode: number) {
    this.priceCode = priceCode;
  }

  getTitle(): String {
    return this.title;
  }

  static CHILDRENS(): number {
    return childrens;
  }

  static REGULAR(): number {
    return regular;
  }

  static NEW_RELEASE(): number {
    return newRelease;
  }
}

export default Movie;