import { Router, Request, Response } from "express";

export default (app: Router) => {
    app.get('/', (req: Request, res: Response) => {
        res.send("hi");
    })
}