/*
 |--------------------------------------
 | Topic Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
mongoose.Promise = global.Promise;
const tagSchema = require('./tagSchema');

const topicSchema = new Schema({
  title: { type: String, required: true },
  forum_id: { type: ObjectId, required: true },
  sticky: Boolean,
  tags: [tagSchema]
});

module.exports = mongoose.model('Topic', topicSchema);
