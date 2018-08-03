
var express = require('express');
var router = express.Router();
import models from '../models/models';
var User = models.User;
var Post = models.Post;
var Product = models.Product;
var Look = models.Look;
var fs = require('fs');
import path from "path";
router.get('/wardrobe', function(req, res) {
  var owner = req.user._id;
  User.findbyId(owner)
  .populate({
    path: 'wardrobe',
    populate: [{path:'headwear'},{path:'top'},{path:'pants'},{path:'footwear'}]
  })
  .populate({
    path: 'looks',
    populate: [{path:'headwear'},{path:'top'},{path:'pants'},{path:'footwear'}]
  })
  .exec(function(error, user) {
    if(err){
      console.log(err)
    }else{
        res.render('wardrobe', {wardrobe: user.wardrobe,user:user})
    }
  })
})

module.exports = router;
