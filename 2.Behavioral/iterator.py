"""
how an object can be iterated
e.g. in python we have "in" built-in iterator: for n in List
-> we don't need to index the array

- better 'cause we don't have to update pointer
"""
class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self, head):
        self.head = head
        self.cur = None

    # Define iterator
    def __iter__(self):
        self.cur = self.head
        return self

    def __next__(self):
        if self.cur:
            val = self.cur.val
            self.cur = self.cur.next
            return val
        else:
            raise StopIteration


if __name__ == '__main__':
    # Initialize LinkedList
    head = ListNode(1)
    head.next = ListNode(2)
    head.next.next = ListNode(3)
    myList = LinkedList(head)

    # Iterate through linked list
    for n in myList:
        print(n)
