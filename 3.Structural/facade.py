"""
an outward appearance that is used to conceal a less pleasant or credible reality
-> facade is a wrapper the lower details we don't want to worry about
e.g. dynamic arrays, array list is constantly resized under the hood
"""

# Python arrays are dynamic by default, this is just an example of resizing
class Array:
    def __init__(self):
        self.capacity = 2
        self.length = 0
        self.arr = [0] * 2  # Array of capacity = 2

    # insert n in the last position of the array
    def pushback(self, n):
        if self.length == self.capacity:
            self.resize()
        # insert at next empty position
        self.arr[self.length] = n
        self.length += 1

    def resize(self):
        # create new array of double capacity
        self.capacity = 2 * self.capacity
        newArr = [0] * self.capacity

        # copy elements to newArr
        for i in range(self.length):
            newArr[i] = self.arr[i]
        self.arr = newArr
    # remove last element in the array
    def popback(self):
        if self.length > 0:
            self.length -= 1