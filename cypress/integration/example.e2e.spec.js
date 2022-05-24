///<reference types="cypress" />

const LoginPage = require('../support/pageobjects/login.page');
const SecurePage = require('../support/pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        SecurePage.flashAlert.should('be.visible')
        SecurePage.flashAlert.should('contain.text', 'You logged into a secure area!');
    });
});