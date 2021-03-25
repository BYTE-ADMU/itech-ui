const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];


module.exports = {
  // START: META INFO
  siteName: "ITECH",
  siteDescription: "ITECH is an online resource library that serves as a learning accelerator to lead the process of Building Young Tech Entrepreneurs.",
  siteUrl: "https://byteitech.com",
  titleTemplate: `%s - ITECH`,
  icon: './src/assets/img/BB3-Primary.svg',
  // END: META INFO

  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  }


};
