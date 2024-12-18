import dotenv from 'dotenv';
import { url } from 'inspector';

dotenv.config();

const MONGO_USERNAME:string = process.env.MONGO_USERNAME ?? '';
const MONGO_PASSWORD:string = process.env.MONGO_PASSWORD ?? '';
const MONGO_URL:string = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@localhost:27017/library`;

const PORT:number = process.env.PORT ? Number(process.env.PORT) : 3091;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server:{
        port: PORT
    }
}