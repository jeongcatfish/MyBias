import mysql from 'mysql2';
import { config } from '../config.js';

console.log("start")
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.databse,
  password: config.db.password
});

export const db = pool.promise();
