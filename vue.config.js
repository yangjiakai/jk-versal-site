const path = require('path')
const merge = require('deepmerge')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// 项目的主要配置文件
module.exports = {
  chainWebpack: (config) => {
    // 修改文件引入自定义路径
    config.resolve.alias
      .set('@', resolve('src'));
    config.module
      .rule('vue')
      .use("vue-loader")
      .tap(options => merge(options, {
        transformAssetUrls: {
          'parallax': 'src',
          'v-img':'src'
        }
      }))
  },

}