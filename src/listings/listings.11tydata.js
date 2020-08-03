module.exports = () => {
  return {
    layout: 'make-my-listings.json.njk',
    tags: "listings",
    eleventyComputed: {
      geo: data => JSON.parse(data.geometry)
    }
  }
}