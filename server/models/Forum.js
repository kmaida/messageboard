/*
 |--------------------------------------
 | Forum Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const forumSchema = new Schema({
  title: { type: String, required: true }
});

module.exports = mongoose.model('Forum', forumSchema);
