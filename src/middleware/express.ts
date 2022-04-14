import express from "express";
import morgan from "morgan";

import api from "../api";

export default async (app: express.Application) => {
    app.use(morgan('dev'));
    app.use(api());
    return app;
}