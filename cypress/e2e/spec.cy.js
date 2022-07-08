describe('我的第一个测试', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.get('[data-testid="action-email"]')
      .type('fake@email.com')
      .should('have.value','fake@email.com')
  })
})

