import siginPage from '../pageObjects/signinPage'
import { Given, When, Then } from 'cucumber'

When(/^I input \"(.*)\" as email$/, (email) => {
    siginPage.inputEmail(email)
})

When(/^I click on continue button$/, () => {
    siginPage.clickOnContinueButton()
})

When(/^I input \"(.*)\" as password$/, (password) => {
    siginPage.inputPassword(password)
})

When(/^I click on signin button$/, () => {
    siginPage.clickOnSigninButton()
})

Then(/^I should see \"(.*)\" as error message for invalid email$/, (errorMessage) =>{
    siginPage.checkErrorLoginMessage(errorMessage)
})

Then(/^I should see \"(.*)\" as error message for invalid password$/, (errorMessage) =>{
    siginPage.checkErrorLoginMessage(errorMessage)
})

Then(/^I should see \"(.*)\" as validate message for missing email$/, (validateMessage) =>{
    siginPage.checkMissingEmailMessage(validateMessage)
})

Then(/^I should see \"(.*)\" as validate message for missing password$/, (validateMessage) =>{
    siginPage.checkMissingPasswordMessage(validateMessage)
})


