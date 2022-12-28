import * as commentsRepository from '../data/comments.js'

export async function postComment(req,res,next){
    console.log(req.body);
  const {text,gifId,userId} = req.body;
  const comment = await commentsRepository.post(text,gifId,userId);
  console.log(`found : ${JSON.stringify(comment)}`);
  res.status(201).json(comment);
}
export async function getChildComments(req,res,next){
    const {parentId} = req.query;
    console.log(req.query);
    const comments = await commentsRepository.getChildComments(parentId);
    console.log(`found : ${JSON.stringify(comments)}`);
    res.status(201).json(comments);
  }

export async function postChildComment(req,res,next){
    const {parentId, userId, text} = req.body;
    const comment = await commentsRepository.postChildComment(parentId, userId, text);
    console.log(`found : ${JSON.stringify(comment)}`);
    res.status(201).json(comment);
  }
  

export async function getComments(req,res,next){
    const {gifId} = req.query;
    console.log(req.query);
    const comments = await commentsRepository.getComments(gifId);
    console.log(`found : ${JSON.stringify(comments)}`);
    res.status(201).json(comments);
  }