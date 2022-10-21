
import signupPage from '../support/pages/signup'

describe('cadastro', () => {

    context('quando o usuario eh novato', () => {

        const user = {
            name: 'vinicius',
            email: 'vemidio1@hotmail.com',
            password: 'mudar123456'
        }

        before(() => {
            signupPage.taks(user.email)
        })
        it('deve cadastrar um novo usuario', () => {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toastHaveText('Agora você se tornou um(a) Samurai, faça seu login para ver seus agendamentos!')
        })
    })

    context('quando o email jah existe', () => {
        const user = {
            name: 'vinicius emidio',
            email: 'vemidio@hotmail.com',
            password: 'mudar123456',
            is_provider: true
        }
        before(() => {
            signupPage.taks(user.email)
            
            cy.request(
                'POST',
                'http://localhost:3333/users',
                user
            ).then((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('deve exibir email já cadastrado', () => {
            signupPage.go()
            signupPage.form(user)
            signupPage.submit()
            signupPage.toastHaveText('Email já cadastrado para outro usuário.')
        })
    })
})


            // cy.intercept('POST', '/users', {
            //     statusCode: 200
            // }).as('postUser')

     

            //cy.wait('@postUser')