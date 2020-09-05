module.exports = {
  /**
   * Filter the listings to just the supplied category, return all if no category provided
   * @param {Array} collection The 11ty collection we want to take from
   * @param {string} category The listing category we want returned
   * @returns {Array} The resulting collection
   */
  getListingsByCategory(collection, category) {
    if (!category) return collection;

    return collection.filter(collectionItem => collectionItem.data.category.includes(category));
  }
}