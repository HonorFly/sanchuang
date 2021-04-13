module.exports ={
    devServer: {
    proxy: {
      '/api': {
        target: 'http://106.12.177.23:8081',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
            '^/api': '', // rewrite path
        },
      }
    }
  }
}