"""
we have UsbCable & UsbPort compatible with each other
"""
class UsbPort:
    def __init__(self):
        self.connection = None
        self.portAvailable = True

    def plug(self, usb):
        if self.portAvailable:
            self.connection = usb.plugUsb()
            self.portAvailable = False

    def availibility(self):
        if self.portAvailable:
            print('This port is available for use')
        else:
            print(f'This port is connected with {self.connection}')

class UsbCable:
    def __init__(self):
        self.type = 'Cable USB'
        self.isPlugged = False

    def plugUsb(self):
        self.isPlugged = True
        return self.type

"""
then we have a MicroUsbCable which is not compatible with the UsbPort
"""
class MicroUsbCable:
    def __init__(self):
        self.type = 'Micro USB'
        self.isPlugged = False

    def plugMicroUsb(self):  # this is no compatible (port is using plugUsb())
        self.isPlugged = True
        return self.type

"""
-> so we create an adapter:
- extend the UsbCable class (the compatible one)
- but is composed of a micro usb
"""
class MicroToUsbAdapter(UsbCable):
    def __init__(self, microUsbCable):
        self.microUsbCable = microUsbCable
        self.type = self.microUsbCable.plugMicroUsb()
    # can override UsbCable.plugUsb() if needed


if __name__ == '__main__':
    usbCable = UsbCable()
    microUsb = MicroUsbCable()
    usbPort1 = UsbPort()
    usbPort2 = UsbPort()

    """
    UsbCables can plug directly into Usb ports
    """
    usbPort1.plug(usbCable)
    usbPort1.availibility()

    """
    cannot usbPort2.plug(microUsb) -> use adapter
    now MicroUsbCables can plug into Usb ports via an adapter
    """
    microToUsbAdapter = MicroToUsbAdapter(microUsb)
    usbPort2.plug(microToUsbAdapter)
    usbPort2.availibility()
