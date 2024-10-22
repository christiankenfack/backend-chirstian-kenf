import { MongoClient, MongoClientOptions, Db } from 'mongodb';
import { config } from '../config';
import { logger } from '../winston';
import { error } from 'winston';



let database: Db;

async function connect() {
    const uri = "mongodb://" + config.get('db.host') + "/" + config.get('db.name') + "?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    try {
        const connection = await client.connect();
        database = connection.db();

    } catch (e) {
        logger.error(`failed to connect to mongodb \n${(e as Error).message}\n${(e as Error).stack}`);
    }
    // finally {
    //     await client.close();
    // }
}

export async function getDb(): Promise<Db> {

    if (!database) await connect();
    return database;
}











