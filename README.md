# WebdriverIO V6 test to identify accessibility isssues in a web page

This repository contains a sample script which will run accessibility test on a webpage.

The script uses the axe-core library from https://www.deque.com/axe/

API reference: https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#section-2-api-reference

It applies the wcag2aa standard to determine the accessiblity issues on the web page


## Running Sample test

Follow the below commands:

- Clone the project - https://github.com/gmaroli/webdriverio-accessibility.git
- Install dependencies using _npm install_ in the terminal.
- Execute _npm test_ to run the test

## Results

Results of the test will be written to a csv file under results/ally directory with the file name name specified for each page appended with the current timestamp

Result file have the following headers:
- Description of the issue
- Impact: Critical, Serious, Medium or low
- HTML: The component that has the issue
- Failure Summary: details of failure
- Id: type of element(button, link)
- Help 
- HelpUrl: Url to the issue which will give what the issue was and how it can be fixed
