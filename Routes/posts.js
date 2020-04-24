const express = require('express');
const Post = require('../models/Post')

const router = express.Router();
//Routes

//GET BACK All the Post
router.get('/', async (req, res)=>{

  try{
    const posts = await Post.find();
    res.json(res)
  }catch(err){
    res.json({message:err})
  }

})

//Post a POST
router.post('/', async(req, res)=>{
  const posts = new Post(req.body);
  try{
    const savedPost = await posts.save();
    res.json(savedPost)
  }catch(error){
    res.json({message:error})
  }

})

//SPECIFIC POST
router.get('/:postID',async (req,res)=>{
  try{
    const post = await Post.findById(req.params.postID);
    res.json(post)
  }catch (e) {
    res.json({message:e})
  }
})

//Delete a specific Post
router.delete('/:postId', async (req, res)=>{
  try{
    const post = await Post.remove({_id:req.params.postId})
    res.json(post)
  }catch (e) {
    res.json({message:e})
  }

})

//Update a Specific Post
router.patch('/:postId', async (req,res)=>{
  try{
  const updatePost = await Post.updateOne({_id:req.params.postId},
    {$set:{title:req.body.title}});
      res.json(updatePost)
  }catch (e) {
    res.json({message:e})
  }
})

module.exports = router ;
