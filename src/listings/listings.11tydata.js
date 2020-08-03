module.exports = () => {
  return {
    tags: "listings",
    eleventyComputed: {
      geo: data => JSON.parse(data.geometry)
    }
  }
}