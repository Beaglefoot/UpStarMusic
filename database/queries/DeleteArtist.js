const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */

// Unlike .remove() method on model this one provides its own
// middleware hooks
// http://mongoosejs.com/docs/middleware.html
module.exports = _id => Artist.findByIdAndRemove(_id);
