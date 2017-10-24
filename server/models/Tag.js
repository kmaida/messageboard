/*
 |--------------------------------------
 | Tag Model
 |--------------------------------------
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const tagSchema = require('./tagSchema');

module.exports = mongoose.model('Tag', tagSchema);
