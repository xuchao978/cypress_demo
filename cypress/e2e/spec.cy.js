describe('我的第一个测试', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')   // 访问网站
    cy.contains('type').click()           // 查找包含内容的元素，然后点击它

    cy.url().should('include', '/commands/actions')  // 获取网址，断言它包含 '/commands/actions'

    cy.get('[id="email1"]')   // 获取包含 data-testid 为 action-email 的元素
      .type('fake@email.com')   // 输入fake@email.com
      .should('have.value','fake@email.com')  //断言输入反映新值
  })
})

