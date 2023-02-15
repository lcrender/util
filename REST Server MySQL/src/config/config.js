import {config} from 'dotenv';
config();
export const HOST = process.env.HOSTDB;
export const USERDB = process.env.USERDB;
export const PASSDB = process.env.PASSDB;
export const PORTDB = process.env.PORTDB;
export const DATAB = process.env.DATAB;
export const PORT = process.env.PORT;