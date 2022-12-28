import express, { response } from 'express';
import * as commentsController from '../controller/comments.js'
import { isAuth } from '../middleware/auth.js';
const router= express.Router();

//댓글 쓰기
router.post('/post',isAuth, commentsController.postComment);
//대댓글 쓰기
router.post('/child',isAuth, commentsController.postChildComment);
//대딧글 가져오기
router.get('/child', commentsController.getChildComments);
//댓글 가져오기
router.get('/', commentsController.getComments);

export default router;