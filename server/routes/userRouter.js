const express = require('express');

const userRouter = express.Router();

userRouter.get('/',(req, res) => {
  res.json({info: 'List of Users'});
});

userRouter.post('/',(req, res) => {
  res.json({info: 'Post a User'});
});
  
userRouter.delete('/',(req, res) => {
  res.json({info: 'Delete a User'});
});

userRouter.put('/',(req, res) => {
  res.json({info: 'Edit a User'});
});

module.exports = userRouter;