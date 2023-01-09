const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/pages/index/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    },
    home: {
      entry: 'src/pages/home/main.ts',
      template: 'public/index.html',
      filename: 'home.html'
    },
    player: {
      entry: 'src/pages/player/main.ts',
      template: 'public/player.html',
      filename: 'player.html'
    }
  }
})
