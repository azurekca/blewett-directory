module.exports = function (eleventyConfig) {

  // copy static assets to output folder
  eleventyConfig.addPassthroughCopy("./src/static/images");
  eleventyConfig.addPassthroughCopy("./src/static/css");
  eleventyConfig.addPassthroughCopy("./src/cms");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};