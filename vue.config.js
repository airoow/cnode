const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/cnode/'
  : '/',
    configureWebpack: {
        resolve: {
          alias: {
            '@': resolve('src')
          }
        }
    },
    css: {
      loaderOptions: {
        sass: {
          data: `
            @import "@/style/variables.scss";
            @import "@/style/mixin.scss";
          `,
        },
      },
    },
}