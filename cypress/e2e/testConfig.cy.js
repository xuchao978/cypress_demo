

describe('测试Cypress.config', () => {

    it('测试取值和设置值', () => {
        // 获取pageLoadTimeout,默认60000
        cy.log(`pageLoadTimeout默认值是:${Cypress.config('pageLoadTimeout')}`)
        // 设置pageLoadTimeout为10000
        Cypress.config('pageLoadTimeout', 90000)
        //再次读取pageLoadTimeout值
        cy.log(`pageLoadTimeout设置后的值是:${Cypress.config('pageLoadTimeout')}`)
        })
})