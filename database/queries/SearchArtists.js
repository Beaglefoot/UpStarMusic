const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
  const propAlterations = {
    // Collection must have text index for $text query.
    // https://docs.mongodb.com/manual/core/index-text/
    name: name => name && { $text: { $search: name } },
    age: ({ min, max }) => ({ age: { $gte: min, $lte: max } }),
    yearsActive: ({ min, max }) => ({
      yearsActive: { $gte: min, $lte: max }
    })
  };

  const query = Object.entries(criteria).reduce(
    (query, [key, value]) => Object.assign(query, propAlterations[key](value)),
    {}
  );

  return Artist.find(query)
    .sort(sortProperty)
    .skip(offset)
    .limit(limit)
    .then(artists => ({ all: artists, count: artists.length, offset, limit }));
};
