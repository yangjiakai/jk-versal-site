module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  // proxy: {
  //   '/api': {
  //     target: 'http://106.15.189.144/api/',
  //     changeOrigin: true,
  //     ws: true,
  //     pathRewrite: {
  //       '^/api': ''
  //     }
  //   }
  // }
  devServer: {
    proxy: {
      '/api': {
        target: 'http://106.15.189.144/api/',
        // ws : true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

  // devServer: {
  //   open: true,
  //   host: 'localhost',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   proxy: {
  //     // 配置跨域
  //     '/api': {
  //       target: 'http://106.15.189.144/api/',
  //       ws: true,
  //       changOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   },
  //   before: app => {}
  // }
};