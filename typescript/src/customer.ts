import Movie from './movie';
import Rental from './rental';

class Customer {
  name: String;
  rentals: Rental[];

  constructor(name: String) {
    this.name = name;
    this.rentals = [];
  }

  addRental(rental: Rental) {
    this.rentals.push(rental);
  }

  getName(): String {
    return this.name;
  }

  statement(): String {
    var totalAmount = 0.0;
    var frequentRenterPoints = 0;
    var result = "Rental Record for " + this.getName() + "\n";

    this.rentals.forEach(it => {
      var thisAmount = 0.0;

      switch (it.getMovie().getPriceCode()) {
        case Movie.CHILDRENS():
          thisAmount += 1.5;
          if (it.getDaysRented() > 3)
              thisAmount += (it.getDaysRented() - 3) * 1.5;
          break;
        case Movie.REGULAR():
          thisAmount += 2.0;
          if (it.getDaysRented() > 2) {
            thisAmount += (it.getDaysRented() - 2) * 1.5;
          }
          break;
        case Movie.NEW_RELEASE():
          thisAmount += it.getDaysRented() * 3;
          break;
      }

      frequentRenterPoints++;
      if (it.getMovie().getPriceCode() == Movie.NEW_RELEASE() && it.getDaysRented() > 1) {
          frequentRenterPoints++;
      }
      
      result += "\t" + it.getMovie().getTitle() + "\t" + thisAmount + "\n";
      totalAmount += thisAmount;
    })

    result += "You owed " + totalAmount + "\n";
    result += "You earned " + frequentRenterPoints + " frequent renter points\n";

    return result;
  }

}

export default Customer;