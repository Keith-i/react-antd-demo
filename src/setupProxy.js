const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      // target: 'http://localhost:3100',
      // target: 'http://tingapi.ting.baidu.com',
      target: 'http://iwenwiki.com/api/blueberrypai',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  )
}