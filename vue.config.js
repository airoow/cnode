const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
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