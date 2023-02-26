"""
you want a static method to share the instance to everyone

PATTERN:
- check if instance exists then return, if no create new
"""

class ApplicationState:
    """
    the instance that is shared among app
    """
    instance = None

    def __init__(self):
        self.isLoggedIn = False

    @staticmethod
    def getAppState():
        if not ApplicationState.instance:
            ApplicationState.instance = ApplicationState()
        return ApplicationState.instance

if __name__ == '__main__':
    appState1 = ApplicationState.getAppState()
    print(appState1.isLoggedIn)

    appState2 = ApplicationState.getAppState()
    appState2.isLoggedIn = True

    print(appState1.isLoggedIn)
    print(appState2.isLoggedIn)

