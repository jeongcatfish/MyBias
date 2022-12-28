import express, { response } from 'express';
import * as favoriteController from '../controller/favorite.js'
import { isAuth } from '../middleware/auth.js';
const router= express.Router();

//좋아요 요청 처리
router.post('/',isAuth, favoriteController.processFavorite)
//좋아요 리스트
router.get('/favoriteList', isAuth, favoriteController.getFavoriteListByUser)

export default router;