import signinPage from '../pageObjects/signinPage'
import { Given, When, Then } from 'cucumber'

Given(/^I go to page \"(.*)\"$/, (pageName) => {
  switch (pageName) {
    case 'homePage':
      signinPage.iGoToPage('/')
      break
    default:
      throw new Error('Invalid parameter. Please check tests\stepDefinitions\baseStep.js')
  }
})

Then(/^I should be on page \"(.*)\"$/, { timeout: 50000 }, (pageName) => {
  switch (pageName) {
    case 'signinPage':
      signinPage.iAmOnPage(signinPage.pageUrl)
      break
    default:
      throw new Error('Invalid parameter. Please check tests\stepDefinitions\baseStep.js')
  }
})