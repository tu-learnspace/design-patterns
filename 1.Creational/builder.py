"""
have individual method to add ingredient

"""
class Burger:
    def __init__(self):
        self.buns = None
        self.patty = None
        self.cheese = None

    def setBuns(self, bunStyle):
        self.buns = bunStyle

    def setPatty(self, pattyStyle):
        self.patty = pattyStyle

    def setCheese(self, cheeseStyle):
        self.cheese = cheeseStyle

    def print(self):
        print('this is a', self.buns, self.patty, self.cheese, 'burger')


class BurgerBuilder:
    def __init__(self):
        self.burger = Burger()

    """
    each return a reference to the builder
    """
    def addBuns(self, bunStyle):
        self.burger.setBuns(bunStyle)
        return self

    def addPatty(self, pattyStyle):
        self.burger.setPatty(pattyStyle)
        return self

    def addCheese(self, cheeseStyle):
        self.burger.setCheese(cheeseStyle)
        return self

    """
    a method to return final product
    """
    def build(self):
        return self.burger


if __name__ == '__main__':
    burger = BurgerBuilder()\
        .addBuns('sesame')\
        .addCheese('swiss cheese')\
        .addPatty('fish-patty')\
        .build()
    burger.print()
