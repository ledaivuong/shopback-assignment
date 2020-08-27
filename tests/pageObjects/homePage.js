import BasePage from './basePage'

class HomePage extends BasePage {

    get pageUrl() { return "/" }

    get signinLink() { return this.waitForClickElement('#nav-link-accountList') }

    get signinButton() { return this.waitForClickElement('#nav-flyout-ya-signin a.nav-action-button') }

    get welcomeUserText() { return this.waitForElementAppear('#nav-link-accountList .nav-line-1-container span') }

    moveToSignInLink() {
        this.signinLink.moveTo()
    }

    clickOnSigninButton() {
        this.signinButton.click()
    }

    checkUserNameAfterLogin(username) {
        expect(browser.getUrl().includes('www.amazon.com/?ref_=nav_signin'))
        expect(this.welcomeUserText.getText()).includes(username)
    }

}

export default new HomePage()