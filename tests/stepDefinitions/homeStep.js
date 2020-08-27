import homePage from '../pageObjects/homePage'
import { Given, When, Then } from 'cucumber'

When(/^I move to signin link$/, () => {
    homePage.moveToSignInLink()
})

When(/^I click on signin button home page$/, () => {
    homePage.clickOnSigninButton()
})

Then(/^I should be welcome as \"(.*)\"$/, (username) => {
    homePage.checkUserNameAfterLogin(username)
})


