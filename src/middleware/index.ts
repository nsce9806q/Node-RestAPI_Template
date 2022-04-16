import express from 'express';
import expressLoader from './express';
import mysqlLoader from './mysql'

export default async (app: express.Application) => {
    const dbConnection = mysqlLoader();
    await expressLoader(app);
};