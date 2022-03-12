const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions:{
    electronBuilder: {
      mainProcessFile: 'src/main/main.ts',
      rendererProcessFile: 'src/renderer/main.ts',
    },
  }
})
