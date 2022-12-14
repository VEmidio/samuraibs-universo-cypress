import { el } from './elements'

class SignupPage {
    go() {
        cy.visit('/signup')
    }

    form(user) {
        cy.get(el.name)
            .type(user.name)
        cy.get(el.email)
            .type(user.email)
        cy.get(el.password)
            .type(user.password)
    }

    submit() {
        cy.contains(el.signupButton)
            .click()
    }

    taks(userEmail) {
        cy.task('removeUser', userEmail)
            .then((result) => {
                console.log(result)
            })
    }

    toastHaveText(expectText) {
        cy.get(el.toast)
            .should('be.visible')
            .find('p')
            .should('have.text', expectText)
    }
}

export default new SignupPage()