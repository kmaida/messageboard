/*
 |--------------------------------------
 | Post Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
mongoose.Promise = global.Promise;

const postSchema = new Schema({
  topic_id: { type: ObjectId, required: true },
  datetime: { type: Date, required: true },
  author: { type: String, required: true },
  post_text: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);
