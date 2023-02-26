"""
modify or extend behavior of a class
but not directly changing it (Open-Closed)

e.g.
we want to remove odd value from array, or negative value
or in future we may have more filter types:
- create Strategy base class & have many inherit
- use that Strategy in a class abstractly
"""
from abc import ABC, abstractmethod


class FilterStrategy(ABC):
    @abstractmethod
    def removeValue(self, val):
        pass


class RemoveNegativeStrategy(FilterStrategy):
    def removeValue(self, val):
        return val < 0


class RemoveOddStrategy(FilterStrategy):
    def removeValue(self, val):
        return abs(val) % 2


"""
by using Strategy, we can add many strategy without modify Values class
"""
class Values:
    def __init__(self, vals):
        self.vals = vals

    def filter(self, strategy):
        res = []
        for n in self.vals:
            if not strategy.removeValue(n):
                res.append(n)
        return res


if __name__ == '__main__':
    values = Values([-7, -4, -1, 0, 2, 6, 9])

    print(values.filter(RemoveOddStrategy()))
    print(values.filter(RemoveNegativeStrategy()))
