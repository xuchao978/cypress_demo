const { defineConfig } = require("cypress")

// 插件文件
// 自定义插件 or 修改或扩展Cypress的配置（例如动态修改配置信息和环境变量）
// 修改特定浏览器的启动参数
// 将消息直接从测试代码传递到后端

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://plat.vpos.xin",
    setupNodeEvents(on, config) {    // 在浏览器上注册事件(插件)
      // implement node event listeners here
    },
    env: {
      // 放置项目中的环境变量
      // 可以在测试文件中使用Cypress.env()来访问环境变量
    },
    "reporter": "junit",
    "reporterOptions": {
      "mochaFile": "./reports/test_report_[hash].xml",
      "toConsole": true
    }
  } 
})
