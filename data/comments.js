import { db } from '../db/database.js';

export async function post(text,gifId,userId) {
  return db
    .execute('INSERT INTO `myfav`.`comments` (`text`, `createdAt`, `gifId`, `userId`) VALUES (?,?,?,?)', [
      text,
      new Date(),
      gifId,
      userId
    ])
    .then((result) => {
        console.log(result);
    });
}
export async function postChildComment(parentId, userId, text) {
    return db
      .execute('INSERT INTO `myfav`.`child_comments` (`text`, `createdAt`, `userId`, `commentsId`) VALUES (?,?,?,?)', [
        text,
        new Date(),
        userId,
        parentId
      ])
      .then((result) => {
          console.log(result);
      });
}
export async function getChildComments(parentId) {
    return db
      .execute('SELECT * FROM myfav.child_comments c LEFT JOIN users u ON c.userId = u.id WHERE commentsId = ?', [parentId])
      .then((result) => {
          console.log(result[0]);
          return result[0];
      });
}

export async function getComments(gifId) {
    return db
      .execute('SELECT c.text,c.createdAt,c.id,c.gifId,u.name, (SELECT count(*) FROM child_comments cc WHERE cc.commentsId = c.id) as childCt FROM myfav.comments c LEFT JOIN users u ON c.userId = u.id where gifId = ?', [gifId])
      .then((result) => {
          console.log(result[0]);
          return result[0];
      });
}
