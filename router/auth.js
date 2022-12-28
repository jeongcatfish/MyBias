import express from 'express';
import {body} from 'express-validator';
import {} from 'express-async-errors';
import * as authController from '../controller/auth.js';
import { isAuth } from '../middleware/auth.js';
import {validate} from '../middleware/validator.js';

const router = express.Router();

const validateCridential = [
    body('username')
    .trim()
    .notEmpty()
    .withMessage('아이디를 입력해주세요'),
    body('password')
    .trim()
    .isLength({min:5})
    .withMessage('패스워드 5자리 이상'),
    validate,
]

const validateSignup = [
    ...validateCridential,
    body('name').notEmpty().withMessage('name is missing'),
    validate,
]

//회원가입
router.post('/signup', validateSignup, authController.signup);
//로그인
router.post('/login', validateCridential, authController.login);
//회원정보확인
router.get('/me',isAuth,authController.me)


export default router;