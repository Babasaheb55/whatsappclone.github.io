import mongoose from 'mongoose';
mongoose.set('strictQuery', true);

import dotenv from 'dotenv';
dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-34omrkk-shard-00-00.do6fjgi.mongodb.net:27017,ac-34omrkk-shard-00-01.do6fjgi.mongodb.net:27017,ac-34omrkk-shard-00-02.do6fjgi.mongodb.net:27017/?ssl=true&replicaSet=atlas-12vzzl-shard-0&authSource=admin&retryWrites=true&w=majority` 
    try{

await mongoose.connect(URL, { useUnifiedTopology: true });

console.log('Database connected successfully')

    } catch (error) {
console.log('Error while connecting with the database', error.message);

    }
}

export default Connection;