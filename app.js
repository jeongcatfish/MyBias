import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import authRouter from './router/auth.js';
import favoriteRouter from './router/favorite.js';
import commentsRouter from './router/comments.js';
import { config } from './config.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
 
app.use('/auth', authRouter);
app.use('/favorite', favoriteRouter);
app.use('/comments', commentsRouter);

app.use((req,res,next) => {
    res.sendStatus(404);
})

app.use((error,req,res,next) => {
    console.error(error);
    res.sendStatus(500);
})

app.listen(config.host.port);