module.exports = function (eleventyConfig) {

  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("./src/static/images");
  eleventyConfig.addPassthroughCopy("./src/static/css");
  eleventyConfig.addPassthroughCopy("./src/static/js");
  
  // cms config and html
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPassthroughCopy("./src/cms");

  // create collection
  eleventyConfig.addCollection("categoriesList", require("./src/utils/getCategoryList.js"));

  // Add a markdown filter
  // Pulled the bare basics for this from here https://github.com/nhoizey/nicolas-hoizey.com/blob/master/.eleventy.js
  const md = require('markdown-it')();
  eleventyConfig.addFilter('markdownify', (markdownString) =>
    md.render(markdownString)
  );

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: "src"
    }
  };
};