import { db } from '../db/database.js';

export async function process(gifId, isFav, userId) {
  return db
    .execute('INSERT INTO `myfav`.`favorite` (`gifId`, `is_favorite`, `userId`) VALUES (?,?,?)', [
      gifId,
      isFav,
      userId,
    ])
    .then((result) => {
        console.log(result);
    });
}

export async function update(bool, gifId, userId) {
    return db
      .execute('UPDATE favorite SET is_favorite=? WHERE gifId=? AND userId = ?', [bool, gifId, userId])
      .then(() => getByGifId(gifId));
  }

export async function findByUserAndGifId(gifId, userId) {
    return db
      .execute('SELECT * FROM `myfav`.`favorite` WHERE gifId=? AND userId = ?', [gifId, userId]) //
      .then((result) => result[0][0]);
 }

export async function getByGifId(id) {
   return db
     .execute('SELECT * FROM favorite  WHERE gifId=?', [id])
     .then((result) => {
         console.log(result[0][0]);
         return result[0][0];
     });
 }


export async function getFavoriteListByUser(name) {
   return db
     .execute('SELECT gifId, name, username, userId FROM favorite f LEFT JOIN users u ON u.id = f.userId WHERE u.name = ? AND is_favorite = 1', [name])
     .then((result) => {
         console.log(result[0][0]);
         return result[0];
     });
}
 