import mysql from 'mysql';
import mysqlConfig from './mysqlConfig';

const pool = mysql.createPool(mysqlConfig);

export default pool;
