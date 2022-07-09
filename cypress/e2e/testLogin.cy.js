describe('登录',  () =>  {

    const username = 'jane.lane'
    const password = 'password123'

    context('HTML 表单登录测试', () => {
        it('登录成功,跳转到dashboard页', () => {
            cy.visit('login')
            cy.get('input[name="username"]').type(username)
            cy.get('input[name="password"]').debug().type(`${password}{enter}`)
            cy.url().should('include', '/dashboard')
            cy.get('h1').should('contain', 'jane.lane')
            
        })
    })

})