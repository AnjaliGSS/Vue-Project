const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = defineConfig({
  
  lintOnSave: false
})
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assest/_index.scss";`
      },
    },
  },
};