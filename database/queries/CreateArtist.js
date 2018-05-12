const Artist = require('../models/artist');

/**
 * Finds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
// This is the same as new Artist(artistProps).save()
// http://mongoosejs.com/docs/api.html#create_create
module.exports = artistProps => Artist.create(artistProps);
