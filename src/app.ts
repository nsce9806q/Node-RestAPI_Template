import express from "express";
import middleware from "./middleware";

const startServer = async () => {
    const app: express.Application = express();
    await middleware(app);

    app.listen(3000, () => {
        console.log("Express Server listening on port 3000");
    })
}

startServer();