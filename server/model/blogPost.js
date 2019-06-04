const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
// create a schema
const blogPostSchema = new Schema({
  author: { type: String, required: true},
  title: { type: String, required: true },
  mainText: { type: String, required: true },
  date: {type: Date, default:Date.now()}
}, { collection : 'blogPosts' });
 
const blogPost = mongoose.model('blogPosts', blogPostSchema);
 
module.exports = blogPost;