const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://plat.vpos.xin/",
    setupNodeEvents(on, config) {    // 插件
      // implement node event listeners here
    },
  },
});
