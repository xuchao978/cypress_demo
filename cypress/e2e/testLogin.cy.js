describe('登录',  () =>  {

    const brhId = '0224102031'
    const username = 'x_requests'
    const password = 'Aa123456!'

    beforeEach(() => {
        cy.login(brhId, username, password)
    })

    context('访问', () => {
        it('添加下级机构', () => {
            cy.visit('/#/organizationalAdd?addSelect=1')
            cy.url().should('include', '/#/organizationalAdd?addSelect=1')
            cy.get('div[class="add_merchant"] p').should('contain', '在系统中录入下级机构信息')
            
        })
    })

})