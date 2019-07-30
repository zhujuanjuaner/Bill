# coding=utf-8

__author__ = 'zxfn4514'

class Controler(object):

    def __init__(self, _agent):
        self.agent = _agent

    def snapshot(self, width=None, filename=None):
        if width:
            _str = self.agent.getScreen(width) 
        else:
            _str = self.agent.getScreen()
        return _str

    def list_app(self):
        return self.agent.listApp()

    def wake(self):
        self.agent.wakeUp()

    def keyevent(self, keyname):
        self.agent.keyevent(keyname)

    def home(self):
        return self.agent.keyevent("HOME")

    def touch(self, pos, duration=0.01):
        return self.agent.click(pos[0], pos[1])

    def swipe(self, p1, p2, duration=0.5):
        # print("test swipe duration================",duration)
        return self.agent.swipe(p2[0], p2[1], p1[0], p1[1], duration*30)

    def text(self, text):
        return self.agent.text(text)

    def start_app(self, package): 
        return self.agent.startApp(package)

    def stop_app(self):
        self.agent.finishApp()

    def get_display_info(self):
        display_info = {}
        dim = self.agent.getPortSize()
        if dim[0] > dim[1]:
            _temp = dim[1]
            dim[1] = dim[0]
            dim[0] = _temp
        display_info['width']  = dim[0]
        display_info["physical_width"] = dim[0]
        display_info['height'] = dim[1]
        display_info["physical_height"] = dim[1]
        display_info['orientation'] = self.agent.getOrientation() - 1
        return display_info
