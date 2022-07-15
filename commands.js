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


Cypress.Commands.add('login', (brhId, username, password, scope) => {
    cy.log(`登录账号: ${brhId} | ${username} | ${password}`)
    cy.session([brhId, username, password, scope],() => {
        cy.request({
            method: 'POST',
            url: '/biz/web/login', 
            body:{
                brhId: brhId,
                username: username,
                password: password,
                scope: scope
            },
            headers: {
                'Authorization': 'Basic ODAwMDAwMDAxMDQxMDphYzU2NGM0NTllMWI0MWJiYTM5MGFiMTQ3MTQxOGI3ZA',
                'X-AUTHORIZATION':{"platformId":"2000000010","lang":"zh"}
            },
        }).then(resp => {
        // window.sessionStorage.setItem('token', resp.token)
        cy.wrap(sessionStorage.setItem('token', resp.token))
        console.log(resp.token)
        })
    })

})