import BasePage from './basePage'

class SigninPage extends BasePage {

    get pageUrl() { return "ap/signin" }

    get emailInput() { return this.waitForInputElement('#ap_email') }

    get continueButton() { return this.waitForClickElement('#continue') }

    get passwordInput() { return this.waitForInputElement('#ap_password') }

    get signinButton() { return this.waitForClickElement('#signInSubmit') }

    get authErrorMessage() { return this.waitForElementAppear('#auth-error-message-box span') }

    get missingEmailMessage() { return this.waitForElementAppear('#auth-email-missing-alert div div') }

    get missingPasswordMessage() { return this.waitForElementAppear('#auth-password-missing-alert div div') }

    inputEmail(email) {
        this.emailInput.addValue(email)
    }

    clickOnContinueButton() {
        this.continueButton.click()
    }

    inputPassword(password) {
        this.passwordInput.addValue(password)
    }

    clickOnSigninButton() {
        this.signinButton.click()
    }

    checkMissingEmailMessage(validateMessage) {
        expect(this.missingEmailMessage.getText()).to.equal(validateMessage)
    }

    checkMissingPasswordMessage(validateMessage) {
        expect(this.missingPasswordMessage.getText()).to.equal(validateMessage)
    }

    checkErrorLoginMessage(errorMessage) {
        expect(this.authErrorMessage.getText()).to.equal(errorMessage)
    }

}

export default new SigninPage()