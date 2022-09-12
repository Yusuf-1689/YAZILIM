from selenium import webdriver
from django.test import TestCase

# browser = webdriver.Chrome()
# browser.get('http://localhost:8000')

class FunctionalTestCase(TestCase):
    
    def setUp(self):
        self.browser = webdriver.Chrome()
        
    def tearDown(self):
        self.browser.quit()
        
    def test_there_is_homepage(self):
        self.browser.get('http://localhost:8000')
        self.assertIn('Enter hash here',self.browser.page_source)

    
     def test_hash_of_hello(self):
        self.browser.get('http://localhost:8000')
        # Find the element with id "text"
        text = self.browser.find_element_by_id("id_text")
        # Simulate user types "hello"
        # send_keys method is used to send text to any field, such as input field of a form or even to anchor tag paragraph, etc. It replaces its contents on the webpage in your browser.
        text.send_keys("hello")
        # Simulate click to the submit button
        self.browser.find_element_by_name("submit").click()
        # Result must be the correct walue
        self.assertInHTML('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824', self.browser.page_source)
