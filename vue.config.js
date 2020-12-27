module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/variables.scss"; 
        @import "~@/assets/styles/mixins.scss";
        @import "~@/assets/styles/main.scss";`
      }
    }
  }
}