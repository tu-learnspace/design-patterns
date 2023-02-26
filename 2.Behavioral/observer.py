"""
- this is how can many things react to a change in real-time
- also called pub-sub, widely used in distributed system

PATTERN:
- maintain a list of subscribers

"""
class YouTubeChannel:
    def __init__(self, name):
        self.name = name
        self.subscribers = []

    def subscriber(self, sub):
        self.subscribers.append(sub)

    def notify(self, event):
        for sub in self.subscribers:
            sub.sendNotification(self.name, event)


"""
abstract class or interface, so many can implement it (e.g. YouTube user, Google user, etc.)
abc = abstract base class
"""
from abc import ABC, abstractmethod


class YouTubeSubscriber(ABC):
    @abstractmethod
    def sendNotification(self, event):
        pass


class YouTubeUser(YouTubeSubscriber):
    def __init__(self, name):
        self.name = name

    def sendNotification(self, channel, event):
        print(f'User {self.name} received notification from {channel}:{event} ')


if __name__ == '__main__':
    channel = YouTubeChannel('MY CHANNEL')

    """
    add subs
    """
    channel.subscriber(YouTubeUser('sub1'))
    channel.subscriber(YouTubeUser('sub2'))
    channel.subscriber(YouTubeUser('sub3'))

    """
    only call notify once, all subs receive notification
    """
    channel.notify('A video released')
