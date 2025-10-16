class Customer:
    def __init__(self, name):
        self.name = name
        self.rentals = []

    def add_rental(self, rental):
        self.rentals.append(rental)

    def get_name(self):
        return self.name

    def statement(self):
        total_amount = 0
        frequent_renter_points = 0
        result = f"Rental Record for {self.get_name()}\n"
        for rental in self.rentals:
            this_amount = 0
            price_code = rental.get_movie().get_price_code()
            days_rented = rental.get_days_rented()
            # Price calculation logic
            if price_code == 0:  # REGULAR
                this_amount += 2
                if days_rented > 2:
                    this_amount += (days_rented - 2) * 1.5
            elif price_code == 1:  # NEW_RELEASE
                this_amount += days_rented * 3
            elif price_code == 2:  # CHILDRENS
                this_amount += 1.5
                if days_rented > 3:
                    this_amount += (days_rented - 3) * 1.5
            # Frequent renter points
            frequent_renter_points += 1
            if price_code == 1 and days_rented > 1:
                frequent_renter_points += 1
            # Show figures for this rental
            result += f"\t{rental.get_movie().get_title()}\t{this_amount}\n"
            total_amount += this_amount
        # Add footer lines
        result += f"Amount owed is {total_amount}\n"
        result += f"You earned {frequent_renter_points} frequent renter points\n"
        return result
