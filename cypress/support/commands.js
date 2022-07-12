// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (brhId, username, password) => {
    Cypress.log(`登录账号: ${brhId} | ${username} | ${password}`)
    cy.request({
        method: 'POST',
        url: '/#/login', 
        body:{
            brhId: brhId,
            username: username,
            password: password
        },
        Headers: {
            'Authorization': 'Basic ODAwMDAwMDAxMDQxMDphYzU2NGM0NTllMWI0MWJiYTM5MGFiMTQ3MTQxOGI3ZA',
            'X-AUTHORIZATION':{"platformId":"2000000010","lang":"zh"}
        }
    })
.then(resp => {
    window.localStorage.setItem('jwt', resp.data.token)
    })
.should('have.status', 200)
.and('include', '/clesrSettlementHome')
})