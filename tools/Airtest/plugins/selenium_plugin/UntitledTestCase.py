# -*- coding: utf-8 -*-
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import NoAlertPresentException
import unittest, time, re

class UntitledTestCase(unittest.TestCase):
    def setUp(self):
        # self.driver = webdriver.Chrome()
        
        # self.driver = webdriver.Remote(command_executor="http://127.0.0.1:9515", desired_capabilities={})
        # self.driver.close()
        # self.driver.session_id = "f21d713c30cb2c143c41effc57756d32"

        self.options = webdriver.chrome.options.Options()
        self.options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
        self.driver = webdriver.Chrome(chrome_options=self.options)

        self.driver.implicitly_wait(30)
        self.base_url = "https://www.katalon.com/"
        self.verificationErrors = []
        self.accept_next_alert = True

    def test_untitled_test_case(self):
        driver = self.driver
        driver.get("https://github.com/fate0/pychrome")
        driver.find_element_by_id("e3e2a9bfd88566b05001b02a3f51d286-60399bb646898c0b7da9e0af6772ba37644db7a9").click()
        driver.find_element_by_id("d680e8a854a7cbad6d490c445cba2eba-81f11ac4ddf1fff48b0ad1a57b5ef70d2b9ebc71").click()
        driver.find_element_by_link_text("pychrome").click()
        driver.find_element_by_xpath("//div[@id='js-repo-pjax-container']/div[2]/div/div[2]/div/div/span").click()
        driver.find_element_by_xpath("//div[@id='js-repo-pjax-container']/div[2]/div/div[5]/details/summary").click()
    
    def is_element_present(self, how, what):
        try: self.driver.find_element(by=how, value=what)
        except NoSuchElementException as e: return False
        return True
    
    def is_alert_present(self):
        try: self.driver.switch_to_alert()
        except NoAlertPresentException as e: return False
        return True
    
    def close_alert_and_get_its_text(self):
        try:
            alert = self.driver.switch_to_alert()
            alert_text = alert.text
            if self.accept_next_alert:
                alert.accept()
            else:
                alert.dismiss()
            return alert_text
        finally: self.accept_next_alert = True
    
    def tearDown(self):
        # self.driver.quit()
        self.assertEqual([], self.verificationErrors)

if __name__ == "__main__":
    unittest.main()
    # driver = webdriver.Chrome()
    # session_url = driver.command_executor._url  
    # session_id = driver.session_id

    # print(session_id, session_url)
