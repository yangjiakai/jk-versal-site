module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  filenameHashing: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://106.15.189.144/api/',
  //       // ws : true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // }
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        return {
          ...options,
          //修复静态资源引用的问题 vue cli 2 => vue cli 3 升级之后配置项由 transformToRequire 改为 transformAssetUrls
          transformAssetUrls: {
            video: ['src', 'poster'],
            source: 'src',
            img: 'src',
            image: 'xlink:href',
            // 在这里添加需要使用静态资源的自定义元素
            'v-img': 'src',
          },
        }
      })
  },
};