const Artist = require('../models/artist');

/**
 * Finds the lowest and highest yearsActive of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max yearsActive, like { min: 0, max: 14 }.
 */
module.exports = () =>
  Promise.all(
    ['yearsActive', '-yearsActive'].map(field =>
      Artist.find()
        .sort(field)
        .limit(1)
    )
  ).then(([[{ yearsActive: min }], [{ yearsActive: max }]]) => ({ min, max }));
