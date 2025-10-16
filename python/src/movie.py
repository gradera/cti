CHILDRENS = 2
REGULAR = 0
NEW_RELEASE = 1

class Movie:
    def __init__(self, title, price_code):
        self.title = title
        self.price_code = price_code

    def get_price_code(self):
        return self.price_code

    def set_price_code(self, price_code):
        self.price_code = price_code

    def get_title(self):
        return self.title

    @staticmethod
    def CHILDRENS():
        return CHILDRENS

    @staticmethod
    def REGULAR():
        return REGULAR

    @staticmethod
    def NEW_RELEASE():
        return NEW_RELEASE
