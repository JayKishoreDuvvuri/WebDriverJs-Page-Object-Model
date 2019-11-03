# [WebDriverJs - Selenium with JavaScript(Page Object Model)]

Design Page Objects and run Tests

## Run application
Clone the repository

```bash
git clone https://github.com/JayKishoreDuvvuri/WebDriverJs-Page-Object-Model.git
```

Install dependencies
```bash
npm i chai chai-as-promised chromedriver mocha mochawesome selenium-webdriver --save-dev 

Install Node modules with command : npm i
```

Run test
```bash
npm run test (OR) npm test        #For sequential Execution of tests
```

Folder Structure

    ├── ...
    │
    ├── lib                         # Helper methods
    │   ├── drivers      
    |   |     ├── DriverManager.js  # Builds WebDriver object for tests
    │   |                 
    |   └── pages                   # Generic functionality for tests
    |         ├── basePage.js       # Start page/ Base page testing functionality
    |         ├── loginPage.js      # Login page testing functionality
    |  
    ├── test                        # Test suite
    │    ├── loginPage.spec.js      # Automated Test Script for the user to login
    │      
    |
    ├── utils                       # Utility files for testing           
    │    ├──locators.js             # HTML and CSS identifier for elements to test
    |
    ├── mochawesome-report          # Test Report for the tests executed
    |     ├──mochawesome.html       # Right click --> Reveal in Finder for MAC (OR) Reveal in Explorer for Windows
    |
    └─── Screenshots                # Screenshot captured after user login to the Apllication

  

