# -*- coding: utf-8 -*-

from app.framework.plugin_system import Plugin

from firebase_plugin.firebase_wnd import FireBaseWindow

class FireBasePlugin(Plugin):

    def createWindows(self):
        self.firebase_wnd = FireBaseWindow()

        return [self.firebase_wnd]