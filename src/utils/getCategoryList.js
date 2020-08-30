module.exports = function(collection) {
  const categoriesSet = new Set();
  // use collection.getAll to turn the collection into an iterable
  // if collection item has a property of "item.data.category", do something
  collection.getAll().forEach(function(item) {
    if ("category" in item.data) {
      let categories = item.data.category;

      // in Netlify CMS admin.yml, set up listings to have a multi select of category
      // add category in categories array to set to get unique values
      for (const category of categories) {
        categoriesSet.add(category);
      }
    }
  });
  return [...categoriesSet].sort();
}