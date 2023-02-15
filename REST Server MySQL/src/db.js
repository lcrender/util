import {createPool} from 'mysql2/promise';
import {HOST, USERDB, PASSDB, PORTDB, DATAB} from './config/config.js';

export const pool = createPool({
    host: process.env.HOSTDB,
    user: process.env.USERDB,
    password: process.env.PASSDB,
    port: process.env.PORTDB,
    database: process.env.DATAB
});