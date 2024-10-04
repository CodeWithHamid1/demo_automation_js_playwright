# Playwright-Automation
Basic Template for Playwright Automation Tests in Javascript


## Pre-requisites

* Playwright requires Node.js version 14 or above. If you are using node version less than 14 then you can download Node.js version 14 or above from nvm (nvm allows you to easily switch between node versions depending on the project)

  * If you are not using nvm already, you can download it and install Node.js from [here](https://catalins.tech/node-version-manager-macos/)

## Setup

* Clone repository:

```
* `cd` into `demo_automation_js_playwright` and run the below commmands:
```
npm ci
npx playwright install
```

## Playwright Commands

* To run all tests use `npx playwright test` This would run all tests 

* To run a single test spec file use `npx playwright test form.spec.js`

* To run a single test inside spec file use test title `npx playwright test -g "Test form with all values"`

* By default tests run in headless mode if you want to run in headed browser add `--headed` at the end on your command


#### Reports

* Use command `npx playwright show-report` at the end of your tests to generate report
  

