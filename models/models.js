var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;
mongoose.connect(connect);

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profilePic: {
    type: String
  },
  posts: {
   type: mongoose.Schema.ObjectId,
   ref: 'Post'
  },
  following:[{
   type: mongoose.Schema.ObjectId,
   ref: 'User'
  }],
  followers:[{
   type: mongoose.Schema.ObjectId,
   ref: 'User'
  }],
  looks:[{
   type: mongoose.Schema.ObjectId,
   ref: 'Look'
<<<<<<< HEAD
  }],
  wardrobe: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Wardrobe'
  }]
=======
 }],
 profilePic:String
>>>>>>> fd5ae9885831cd602a45230d762d19fba9c8b7bd
});

var postSchema = new mongoose.Schema({
  image: String,
  likes: Number,
  Look: {
    type: mongoose.Schema.ObjectId,
    ref: 'Look'
  },
  fromUser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  ratings:{
    type: mongoose.Schema.ObjectId,
    ref: 'Ratings'
  }
})

var ratingsSchema = new mongoose.Schema({
  smileys:Number,
  meh:Number,
  frowns:Number
})

var lookSchema = new mongoose.Schema({
  headwear:{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  },
  top:{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  },
  pants:{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  },
  footwear:{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  }
})

var productSchema = new mongoose.Schema({
  Amazonlink: String,
  description: String,
  type:String,
  price: Number,
  image: String,
})
<<<<<<< HEAD

var wardrobeSchema = new mongoose.Schema({
  headwear: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  }]
  tops: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  }]
  pants: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  }]
  footwear: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Product'
  }]
})

=======
>>>>>>> fd5ae9885831cd602a45230d762d19fba9c8b7bd
var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);
var Product = mongoose.model('Product', productSchema);
var Look = mongoose.model('Look', lookSchema);
var Ratings = mongoose.model('Ratings',ratingsSchema);
var Wardrobe = mongoose.model('Wardrobe', wardrobeSchema);

export default {User, Post, Product, Look, Wardrobe}
