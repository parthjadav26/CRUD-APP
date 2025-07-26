import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config({path : '../.env'});

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

db.on('error',(err)=>{
    console.error("Unexpected error on idle Client",err);
    process.exit(-1);
});

export const query = (text,parameters)=> db.query(text,parameters);

export default db;