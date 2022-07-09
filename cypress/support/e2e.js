// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// 支持文件
// 此文件用于放置可重用配置，如底层通用函数 or 局部配置
beforeEach(() => {
    cy.log(`当前环境变量为${JSON.stringify(Cypress.env())}`)
    cy.log(`当前配置信息为${JSON.stringify(Cypress.config())}`)
})
