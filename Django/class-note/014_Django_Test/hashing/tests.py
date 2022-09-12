from selenium import webdriver

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
