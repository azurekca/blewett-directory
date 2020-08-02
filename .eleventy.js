module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/cms");

  return {
    dir: {
      input: "src",
      output: "public"
    }
  };
};