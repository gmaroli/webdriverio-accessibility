# WebdriverIO V6 test to identify accessibility isssues in a web page

This repository contains a sample script which will run accessibility test on a webpage
The script uses the axe-core library from https://www.deque.com/axe/
It applied the wcag2aa standard to determine the accessiblity issues on the web page


## Running Sample test

Follow the below commands:

- Clone the project - https://github.com/gmaroli/webdriverio-accessibility.git
- Install dependencies using _npm install_ in the terminal.
- Execute _npm test_ to run the test

## Results

Results of the test will be written to a csv file under results/ally directory with the file name name specified for each page appended with the current timestamp