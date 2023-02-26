# a normal Burger
class Burger:
    def __init__(self, ingredients):
        self.ingredients = ingredients

    def print(self):
        print(self.ingredients)


# using Factory
class BurgerFactory:
    def createCheeseBurger(self):
        ingredients = ['bun', 'cheese']
        return Burger(ingredients)

    def createDeluxeCheeseBurger(self):
        ingredients = ['bun', 'cheese', 'tomatoe', 'lettuce', 'special-sauce']
        return Burger(ingredients)


if __name__ == '__main__':
    """
    all we need to do is tell factory what we want
    """
    burgerFactory = BurgerFactory()
    burgerFactory.createCheeseBurger().print()
    burgerFactory.createDeluxeCheeseBurger().print()
    """
    but you'll never know what is the ingredient
    -> to know you could use builder
    """