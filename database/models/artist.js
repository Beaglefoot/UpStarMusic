const mongoose = require('mongoose');
const AlbumSchema = require('./album');
const { Schema } = mongoose;

const ArtistSchema = new Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

// Just for testing middleware scenario
ArtistSchema.pre('findOneAndRemove', function(next) {
  console.log('hi');
  next();
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;
